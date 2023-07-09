import { Avatar, Button, Container, Grid } from "@mui/material";
import React from "react";
import { styled } from "styled-components";
import { useSelector } from "react-redux";
import { NavLinkDiv, RightSidebarItem } from "../style";

import { useDispatch } from "react-redux";
import {
  followUser,
  unfollowUser,
  userFollow,
  userUnfollow,
} from "../User/UserSlice";
import { followCount, unfollowCount } from "../Profile/ProfileSlice";
import { openNotificationWithIcon } from "../../components/Notify";
import { notification } from "antd";
const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #f0f0f0;
`;
export const UserList = () => {
  const [api, contextHolder] = notification.useNotification();

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userList);
  const { profile } = useSelector((state) => state.userProfile);
  const handleFollow = (e, id) => {
    e.preventDefault();
    dispatch(followUser(id));
    dispatch(userFollow(id));
    dispatch(followCount());
    openNotificationWithIcon(api, "success", "Follow");
  };
  const handleUnfollow = (e, id) => {
    e.preventDefault();
    dispatch(userUnfollow(id));
    dispatch(unfollowUser(id));
    dispatch(unfollowCount());
    openNotificationWithIcon(api, "info", "Unfollow");
  };
  return (
    <>
      <StyledContainer maxWidth="xl">
        {contextHolder}
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            sx={{ display: { xs: "block", sm: "block" } }}
            ml={5}
            mr={5}
          >
            {users.map((user) =>
              profile._id === user._id ? null : (
                <>
                  <NavLinkDiv to={`/user-profile/${user._id}`} key={user._id}>
                    <RightSidebarItem>
                      <Grid container alignItems="center" mb={3} spacing={2}>
                        <Grid item>
                          <ImageWrapper>
                            <Avatar
                              src={process.env.PUBLIC_URL + user?.avatar}
                            />
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
          </Grid>
        </Grid>
      </StyledContainer>
    </>
  );
};

export const StyledContainer = styled(Container)`
  height: 100vh;
  margin-top: 4.5rem;
  padding: 0 !important;
`;
