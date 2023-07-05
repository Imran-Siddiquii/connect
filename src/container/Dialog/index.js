import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ImageUploadCard from "../../components/ImageUpload";
import {
  UserCardActionButton,
  UserCardActions,
  UserCardContainer,
  UserCardContent,
  UserCardHeader,
  UserCardProfileName,
} from "./style";
import { v4 as uuid } from "uuid";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import {
  addUserPost,
  updateUserPost,
} from "../UserPostContainer/userPostSlice";
import { Avatar } from "@mui/material";
import { useState } from "react";
import { notification } from "antd";
import { openNotificationWithIcon } from "../../components/Notify";

const formatDate = () => dayjs().format("YYYY-MM-DDTHH:mm:ssZ");

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({
  open,
  handleClose,
  title,
  postButtonText,
  profile,
  posts,
}) {
  const [userContent, setUserContent] = useState(posts?.content);
  const [userContentImage, setUserContentImage] = useState(posts?.postImageUrl);
  const [toggleImage, setToggleImage] = useState(
    posts?.content ? "uploaded" : "initial"
  );
  const { username, firstName, lastName, avatar } = profile;
  const dispatch = useDispatch();
  const [api, contextHolder] = notification.useNotification();

  const handlePostContent = (e) => {
    setUserContent(e.target.value);
  };
  const handleUploadClick = (event) => {
    var file = event.target.files[0];
    const reader = new FileReader();
    var url = reader.readAsDataURL(file);
    reader.onloadend = function (e) {
      setUserContentImage([reader.result]);
    };

    setToggleImage("uploaded");
    setUserContentImage(event.target.files[0]);
  };
  const handleToggle = () => {
    setToggleImage("initial");
  };
  const imageResetHandler = () => {
    setToggleImage("initial");
    setUserContentImage(null);
  };

  const addPost = () => {
    const addUserPostValue = {
      _id: posts ? posts._id : uuid(),
      content: userContent,
      postImageUrl: userContentImage,
      userImage: avatar,
      likes: {
        dislikeCount: 0,
        likeCount: 0,
        likedBy: [],
        dislikedBy: [],
      },
      username: username,
      name: `${firstName} ${lastName}`,
      createdAt: formatDate(),
      updatedAt: formatDate(),
    };
    if (postButtonText !== "Post") {
      dispatch(updateUserPost(addUserPostValue));
      openNotificationWithIcon(api, "success", "Post Update Successfully");
    } else {
      dispatch(addUserPost(addUserPostValue));
      openNotificationWithIcon(api, "success", "Post Upload Successfully");
    }
    handleClose();
    setToggleImage("initial");
    setUserContentImage(null);
    setUserContent(null);
  };
  return (
    <div>
      {contextHolder}
      <BootstrapDialog
        onClose={() => handleClose()}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={() => handleClose()}
        >
          {title}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <UserCardContainer>
            <UserCardHeader>
              <Avatar
                alt="Remy Sharp"
                variant="Round"
                style={{
                  padding: 0,
                  marginRight: "15px",
                  cursor: "pointer",
                  display: "flex",
                }}
                src={avatar}
              />
              <UserCardProfileName>
                {firstName} {lastName}
              </UserCardProfileName>
            </UserCardHeader>
            <UserCardContent>
              <textarea
                rows="4"
                cols="50"
                placeholder="What's on your mind?"
                style={{
                  border: "none",
                  width: "100%",
                  resize: "none",
                  outline: "none",
                  overflow: "hidden",
                }}
                value={userContent}
                onChange={handlePostContent}
              />
            </UserCardContent>
            <UserCardActions>
              <UserCardActionButton>
                <Avatar
                  alt="Remy Sharp"
                  variant="Round"
                  style={{
                    padding: 0,
                    marginRight: "15px",
                    cursor: "pointer",
                    display: "flex",
                  }}
                  src={avatar}
                />
                <ImageUploadCard
                  toggleImage={toggleImage}
                  handleToggle={handleToggle}
                  userContentImage={userContentImage}
                  handleUploadClick={handleUploadClick}
                  imageResetHandler={imageResetHandler}
                />
                Photo/Video
              </UserCardActionButton>
            </UserCardActions>
          </UserCardContainer>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" autoFocus onClick={() => handleClose()}>
            Cancel
          </Button>
          <Button variant="contained" autoFocus onClick={() => addPost()}>
            {postButtonText}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
