import { Button, Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { styled } from "styled-components";
import { Sidebar } from "../Sidebar";
import { RightSidebar } from "../RightSideBar";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { UserPost } from "../UserPostContainer";
import { fetchBookmark } from "./bookmarkSlice";
import { NavLink } from "react-router-dom";

export const Bookmark = () => {
  const { loading, error, bookmarkPost } = useSelector(
    (state) => state.bookmark
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookmark());
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
            {bookmarkPost.length === 0 ? (
              <div style={{ textAlign: "center" }}>
                <h3>No Post In Bookmark </h3>
                <NavLink to="/">
                  <Button variant="contained">Add Now</Button>
                </NavLink>
              </div>
            ) : null}
            {loading ? (
              <Loader />
            ) : (
              bookmarkPost.map((card) => (
                <UserPost posts={card} removeBookmark />
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
