import React, { useState } from "react";
import {
  UserPostAction,
  UserPostActions,
  UserPostContainer,
  UserPostContent,
  UserPostHeader,
  UserPostImage,
  UserPostProfile,
  UserPostProfileName,
} from "./style";
import {
  Bookmark,
  BookmarkAddOutlined,
  BookmarkRemoveOutlined,
  Delete,
  Edit,
  Favorite,
  FavoriteBorder,
  MoreVert,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Paper,
  Popover,
  Tooltip,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import {
  addToBookmarkPost,
  deleteUserPost,
  likePost,
  removeToBookmarkPost,
} from "./userPostSlice";
import { AddBookmark, RemoveBookmark } from "../Bookmark/bookmarkSlice";
import { CreatePost } from "../../components/CreatePost";
import { notification } from "antd";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  cursor: "pointer",
  width: "100%",
}));
export const UserPost = ({
  posts,
  removeBookmark,
  handleRemoveBookmark,
  postEdit,
  openNotificationWithIcon,
}) => {
  const [openDialog, setOpenDialog] = useState(false);

  const dispatch = useDispatch();
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon1 = (type, message) => {
    api[type]({
      message: message,
    });
  };

  const addToBookmark = (post) => {
    dispatch(addToBookmarkPost(post._id));
    dispatch(AddBookmark(post._id));
    openNotificationWithIcon1("success", "Added to Bookmark");
  };

  const removeToBookmark = (id) => {
    dispatch(RemoveBookmark(id));
    dispatch(removeToBookmarkPost(id));
    openNotificationWithIcon("info", "Remove from Bookmark");
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDialog = () => {
    setOpenDialog(false);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <UserPostContainer>
      {contextHolder}
      <UserPostHeader>
        <UserPostProfile>
          {/* <UserPostProfileImage src={posts.userImage} alt="Profile" /> */}
          <Avatar
            alt="username"
            variant="round"
            style={{ paddingLeft: "0", margin: 0, cursor: "pointer" }}
            src={posts.userImage}
            // sx={{ width: 175, height: 130 }}
            // onClick={() => handleAvatarChange(avatar.Avatar)}
          />
          <UserPostProfileName>{posts?.name}</UserPostProfileName>
        </UserPostProfile>
        <UserPostActions>
          {!postEdit && removeBookmark ? (
            <UserPostAction>
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  marginRight: "4px",
                }}
              >
                <Tooltip
                  title="Remove Bookmark"
                  style={{ cursor: "pointer" }}
                  onClick={() => removeToBookmark(posts._id)}
                >
                  <BookmarkRemoveOutlined color="primary" />
                </Tooltip>
              </div>
            </UserPostAction>
          ) : null}
          <UserPostAction>
            <span
              style={{
                width: "16px",
                height: "16px",
                marginRight: "4px",
              }}
            >
              {(!postEdit && posts?.isBookmark) ||
              (!postEdit && removeBookmark) ? (
                <Tooltip title="BookMarked">
                  <Bookmark color="primary" />
                </Tooltip>
              ) : !postEdit ? (
                <Tooltip title="Add To Bookmark" style={{ cursor: "pointer" }}>
                  <BookmarkAddOutlined
                    color="primary"
                    onClick={() => addToBookmark(posts)}
                  />
                </Tooltip>
              ) : null}
              {postEdit ? (
                <>
                  <Tooltip title="Edit" style={{ cursor: "pointer" }}>
                    <MoreVert color="primary" onClick={handleClick} />
                  </Tooltip>
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                  >
                    <Typography
                      startIcon={<Edit />}
                      style={{ cursor: "pointer" }}
                      sx={{ pt: 2, pl: 1, pr: 1 }}
                      onClick={() => setOpenDialog(true)}
                    >
                      Edit
                    </Typography>
                    <CreatePost
                      posts={posts}
                      button={false}
                      openDialog={openDialog}
                      handleOpenDialog={() => handleDialog()}
                    />
                    <Typography
                      onClick={() => {
                        dispatch(deleteUserPost(posts._id));
                        openNotificationWithIcon1("success", "Post Deleted");
                      }}
                      startIcon={<Delete />}
                      sx={{ pt: 2, pl: 1, pr: 1, pb: 1 }}
                      style={{ cursor: "pointer" }}
                    >
                      Delete
                    </Typography>
                  </Popover>
                </>
              ) : null}
            </span>
          </UserPostAction>
        </UserPostActions>
      </UserPostHeader>
      <UserPostContent>{posts.content}</UserPostContent>
      {posts.postImageUrl ? (
        <UserPostImage
          src={posts.postImageUrl}
          style={{
            height: "350px",
            marginRight: "4px",
          }}
          alt="Post"
        />
      ) : null}
      <UserPostActions>
        <UserPostAction>
          <Favorite color="primary" />
          <span> {posts.likes?.likedBy?.[0]?.username}</span>{" "}
          {posts.likes?.likeCount} Likes
        </UserPostAction>
      </UserPostActions>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4} columns={16}>
          <Grid item xs={16}>
            <Item>
              {posts.isLike ? (
                <Button style={{ width: "100%" }} startIcon={<Favorite />}>
                  Liked
                </Button>
              ) : (
                <Button
                  style={{ width: "100%" }}
                  onClick={() => dispatch(likePost(posts))}
                  startIcon={<FavoriteBorder />}
                >
                  Like
                </Button>
              )}
            </Item>
          </Grid>
        </Grid>
      </Box>
    </UserPostContainer>
  );
};
