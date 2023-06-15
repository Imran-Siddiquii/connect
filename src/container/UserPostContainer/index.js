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

export const UserPost = ({ posts }) => {
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
      <UserPostImage src={posts.postImageUrl} alt="Post" />
      <UserPostActions>
        <UserPostAction>{posts.likes?.likesCount}</UserPostAction>
        <UserPostAction>5 Comments</UserPostAction>
        <UserPostAction>2 Shares</UserPostAction>
        <UserPostActionButton>
          <img
            src="like-icon.png"
            alt="Like"
            style={{
              width: "20px",
              height: "20px",
              marginRight: "8px",
            }}
          />
          Like
        </UserPostActionButton>
        <UserPostActionButton>
          <img
            src="comment-icon.png"
            alt="Comment"
            style={{
              width: "20px",
              height: "20px",
              marginRight: "8px",
            }}
          />
          Comment
        </UserPostActionButton>
        <UserPostActionButton>
          <img
            src="share-icon.png"
            alt="Share"
            style={{
              width: "20px",
              height: "20px",
              marginRight: "8px",
            }}
          />
          Share
        </UserPostActionButton>
      </UserPostActions>
    </UserPostContainer>
  );
};
