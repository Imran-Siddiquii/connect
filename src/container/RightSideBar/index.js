import React, { useEffect } from "react";
import {
  RightSidebarContainer,
  RightSidebarItem,
  StickyColumn,
} from "../style";
import { Avatar, Button, Grid } from "@mui/material";
import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserList } from "../User/UserSlice";
import { NavLink } from "react-router-dom";

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
  useEffect(() => {
    dispatch(fetchUserList());
  }, []);
  const handleFollow = (e, id) => {
    e.preventDefault();
    console.log("🚀 ~ file: index.js:29 ~ handleFollow ~ e:", id);
  };
  return (
    <>
      <StickyColumn style={{ boxShadow: "-2px -2px 8px 1px #7fbaf5" }}>
        <RightSidebarContainer>
          {users.map((user) => (
            <>
              <NavLink to={`/user-profile/${user._id}`} key={user._id}>
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
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={(e) => handleFollow(e, user._id)}
                      >
                        Follow
                      </Button>
                    </Grid>
                  </Grid>
                </RightSidebarItem>
              </NavLink>
            </>
          ))}
        </RightSidebarContainer>
      </StickyColumn>
    </>
  );
};
