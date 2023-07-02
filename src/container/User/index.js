import React, { useEffect } from "react";
import { StyledContainer } from "../Profile";
import { Grid } from "@mui/material";
import { Sidebar } from "../Sidebar";
import { RightSidebar } from "../RightSideBar";
import { useParams } from "react-router-dom";
import { fetchSingleUserDetails } from "./SingleUser";
import { useDispatch, useSelector } from "react-redux";
import { ProfileCard } from "../../components/ProfileCard";
import Loader from "../../components/Loader";
import { UserPost } from "../UserPostContainer";

export const Users = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.singleUser);
  const { posts, isLoading, isError } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchSingleUserDetails(id));
  }, [id]);

  return (
    <div>
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
            <ProfileCard profile={user} edit={false} />
            {Boolean(
              posts?.slice()?.filter((ele) => ele.username == user.username)
                .length
            ) ? null : (
              <div style={{ textAlign: "center", marginTop: "3rem" }}>
                <h3> Haven't post anything </h3>
              </div>
            )}
            {isLoading ? (
              <Loader />
            ) : (
              posts
                ?.slice()
                ?.filter((ele) => ele.username == user.username)
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .map((card) => <UserPost key={card.id} posts={card} />)
            )}
          </Grid>
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
    </div>
  );
};
