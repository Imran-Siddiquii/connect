import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { Sidebar } from "../Sidebar";
import { RightSidebar } from "../RightSideBar";
import { styled } from "styled-components";
import { ProfileCard } from "../../components/ProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { updateAvatar } from "./ProfileSlice";
import { UserPost } from "../UserPostContainer";
import Loader from "../../components/Loader";
import { CreatePost } from "../../components/CreatePost";

export const Profile = () => {
  const { posts, isLoading, isError } = useSelector((state) => state.posts);
  const { profile } = useSelector((state) => state.userProfile);
  return (
    <>
      <StyledContainer maxWidth="xl">
        <Grid container>
          {/* First column */}
          <Grid
            item
            xs={12}
            sm={3}
            style={{ paddingLeft: "0rem" }}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Sidebar />
          </Grid>
          {/* Second column */}
          <Grid item xs={12} sm={6} style={{ padding: "0rem 2rem" }}>
            <ProfileCard profile={profile} edit={true} />
            {Boolean(
              posts?.slice()?.filter((ele) => ele.username == profile.username)
                .length
            ) ? null : (
              <div style={{ textAlign: "center", marginTop: "3rem" }}>
                <h3>You haven't post anything </h3>
                <CreatePost button={true} />
              </div>
            )}
            {isLoading ? (
              <Loader />
            ) : (
              posts
                ?.slice()
                ?.filter((ele) => ele.username == profile.username)
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .map((card) => (
                  <UserPost key={card.id} posts={card} postEdit={true} />
                ))
            )}
          </Grid>
          {/* Third column */}
          <Grid
            item
            xs={12}
            sm={3}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <RightSidebar />
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
