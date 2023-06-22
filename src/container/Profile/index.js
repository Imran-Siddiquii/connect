import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { Sidebar } from "../Sidebar";
import { RightSidebar } from "../RightSideBar";
import { styled } from "styled-components";
import { ProfileCard } from "../../components/ProfileCard";
import { useDispatch } from "react-redux";
import { updateAvatar } from "./ProfileSlice";

export const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateAvatar("Avataruser.png"));
  }, []);
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
            <ProfileCard />
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
