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
import { notification } from "antd";

export const Bookmark = () => {
  const { loading, error, bookmarkPost } = useSelector(
    (state) => state.bookmark
  );
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type, message) => {
    api[type]({
      message: message,
    });
  };
  const { posts, isLoading, isError } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookmark());
  }, []);
  return (
    <>
      <StyledContainer maxWidth="xl">
        {contextHolder}
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
            {bookmarkPost?.length === 0 ? (
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
              posts?.map((card) =>
                card.isBookmark ? (
                  <UserPost
                    posts={card}
                    removeBookmark={true}
                    openNotificationWithIcon={openNotificationWithIcon}
                  />
                ) : null
              )
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
