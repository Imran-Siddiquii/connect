import { Container, Grid } from "@mui/material";
import React from "react";
import { Sidebar } from "../Sidebar";
import { RightSidebar } from "../RightSideBar";
import { styled } from "styled-components";

export const LikedPost = () => {
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
            {/* {isLoading ? (
            <Loader />
          ) : (
            posts?.map((card) => <UserPost posts={card} />)
          )} */}
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
