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
import { ThumbDown, ThumbUp } from "@mui/icons-material";
import { Box, Button, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { dislikePost, likePost } from "./userPostSlice";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  cursor: "pointer",
  width: "100%",
}));
export const UserPost = ({ posts }) => {
  const dispatch = useDispatch();
  return (
    <UserPostContainer>
      <UserPostHeader>
        <UserPostProfile>
          <UserPostProfileImage src={posts.userImage} alt="Profile" />
          <UserPostProfileName>John Doe</UserPostProfileName>
        </UserPostProfile>
        <UserPostActions>
          <UserPostAction>
            <img
              src={posts.postImageUrl}
              alt="Edit"
              style={{
                width: "16px",
                height: "16px",
                marginRight: "4px",
              }}
            />
            Edit
          </UserPostAction>
          <UserPostAction>
            <img
              src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
              alt="Bookmark"
              style={{
                width: "16px",
                height: "16px",
                marginRight: "4px",
              }}
            />
            Bookmark
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
