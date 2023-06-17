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
  UserCardProfileImage,
  UserCardProfileName,
} from "./style";

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
}) {
  return (
    <div>
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
              <UserCardProfileImage
                src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                alt="Profile"
              />
              <UserCardProfileName>John Doe</UserCardProfileName>
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
              />
            </UserCardContent>
            <UserCardActions>
              <UserCardActionButton>
                <img
                  src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                  alt="Phot"
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "8px",
                  }}
                />
                <ImageUploadCard />
                Photo/Video
              </UserCardActionButton>
            </UserCardActions>
          </UserCardContainer>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" autoFocus onClick={() => handleClose()}>
            Cancel
          </Button>
          <Button variant="contained" autoFocus onClick={() => handleClose()}>
            {postButtonText}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
