import React from "react";
import {
  UserPostAction,
  UserPostActionButton,
  UserPostActions,
  UserPostContainer,
  UserPostContent,
  UserPostHeader,
  UserPostImage,
  UserPostProfile,
  UserPostProfileImage,
  UserPostProfileName,
} from "./style";
import {
  Bookmark,
  BookmarkAddOutlined,
  BookmarkRemoveOutlined,
  ThumbDown,
  ThumbUp,
} from "@mui/icons-material";
import { Box, Button, Grid, Paper, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import {
  addToBookmarkPost,
  dislikePost,
  likePost,
  removeToBookmarkPost,
} from "./userPostSlice";
import { AddBookmark, RemoveBookmark } from "../Bookmark/bookmarkSlice";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  cursor: "pointer",
  width: "100%",
}));
export const UserPost = ({ posts, removeBookmark, handleRemoveBookmark }) => {
  const dispatch = useDispatch();

  const addToBookmark = (post) => {
    dispatch(addToBookmarkPost(post._id));
    dispatch(AddBookmark(post._id));
  };

  const removeToBookmark = (id) => {
    dispatch(RemoveBookmark(id));
    dispatch(removeToBookmarkPost(id));
  };
  return (
    <UserPostContainer>
      <UserPostHeader>
        <UserPostProfile>
          <UserPostProfileImage src={posts.userImage} alt="Profile" />
          <UserPostProfileName>John Doe</UserPostProfileName>
        </UserPostProfile>
        <UserPostActions>
          {removeBookmark ? (
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
              {posts?.isBookmark || removeBookmark ? (
                <Tooltip title="BookMarked">
                  <Bookmark color="primary" />
                </Tooltip>
              ) : (
                <Tooltip title="Add To Bookmark" style={{ cursor: "pointer" }}>
                  <BookmarkAddOutlined
                    color="primary"
                    onClick={() => addToBookmark(posts)}
                  />
                </Tooltip>
              )}
            </span>
          </UserPostAction>
        </UserPostActions>
      </UserPostHeader>
      <UserPostContent>{posts.content}</UserPostContent>
      <UserPostImage
        src={posts.postImageUrl}
        style={{
          height: "350px",
          marginRight: "4px",
        }}
        alt="Post"
      />
      <UserPostActions>
        <UserPostAction>
          <ThumbUp color="primary" />{" "}
          <span> {posts.likes?.likedBy?.[0]?.username}</span>{" "}
          {posts.likes?.likeCount} Likes
        </UserPostAction>
      </UserPostActions>
      <UserPostActions>
        <UserPostAction>
          <ThumbDown color="warning" />{" "}
          <span> {posts.likes?.dislikedBy?.[0]?.username}</span>{" "}
          {posts.likes?.dislikeCount} dislikes
        </UserPostAction>
      </UserPostActions>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4} columns={16}>
          <Grid item xs={8}>
            <Item>
              <Button
                style={{ width: "100%" }}
                onClick={() => dispatch(likePost(posts))}
                startIcon={<ThumbUp />}
              >
                Like
              </Button>
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
              <Button
                onClick={() => dispatch(dislikePost(posts))}
                color="warning"
                style={{ width: "100%" }}
                startIcon={<ThumbDown />}
              >
                Dislike
              </Button>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </UserPostContainer>
  );
};
