import React from "react";
import {
  NavLinkDiv,
  RightSidebarContainer,
  RightSidebarItem,
  StickyColumn,
} from "../style";
import { Avatar, Button, Grid } from "@mui/material";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  followUser,
  unfollowUser,
  userFollow,
  userUnfollow,
} from "../User/UserSlice";
import { NavLink } from "react-router-dom";
import { followCount, unfollowCount } from "../Profile/ProfileSlice";

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #f0f0f0;
`;
export const RightSidebar = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userList);
  const { profile } = useSelector((state) => state.userProfile);
  const handleFollow = (e, id) => {
    e.preventDefault();
    dispatch(followUser(id));
    dispatch(userFollow(id));
    dispatch(followCount());
  };
  const handleUnfollow = (e, id) => {
    e.preventDefault();
    dispatch(userUnfollow(id));
    dispatch(unfollowUser(id));
    dispatch(unfollowCount());
  };

  return (
    <>
      <StickyColumn style={{ boxShadow: "-2px -2px 8px 1px #7fbaf5" }}>
        <RightSidebarContainer>
          {users.map((user) =>
            profile._id == user._id ? null : (
              <>
                <NavLinkDiv to={`/user-profile/${user._id}`} key={user._id}>
                  <RightSidebarItem>
                    <Grid container alignItems="center" mb={3} spacing={2}>
                      <Grid item>
                        <ImageWrapper>
                          <Avatar src={user.avatar} />
                        </ImageWrapper>
                      </Grid>
                      <Grid item xs>
                        <div>
                          {user.firstName} {user.lastName}
                        </div>
                        <small>{user.username}</small>
                      </Grid>
                      <Grid item>
                        {user?.isFollow ? (
                          <Button
                            variant="button"
                            color="primary"
                            style={{ cursor: "default" }}
                            onClick={(e) => handleUnfollow(e, user._id)}
                          >
                            Unfollow
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={(e) => handleFollow(e, user._id)}
                          >
                            Follow
                          </Button>
                        )}
                      </Grid>
                    </Grid>
                  </RightSidebarItem>
                </NavLinkDiv>
              </>
            )
          )}
        </RightSidebarContainer>
      </StickyColumn>
    </>
  );
};
