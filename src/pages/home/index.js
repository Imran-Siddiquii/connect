import Header from "../../components/Header";
import styled from "styled-components";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
import { Sidebar } from "../../container/Sidebar";
import { RightSidebar } from "../../container/RightSideBar";
import { UserPost } from "../../container/UserPostContainer";
import { useEffect } from "react";
import { fetchUserPost } from "../../container/UserPostContainer/userPostSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
const StyledContainer = styled(Container)`
  height: 100vh;
  margin-top: 4.5rem;
  padding: 0 !important;
`;

export const Home = () => {
  const { posts, isLoading, isError } = useSelector((state) => state.posts);
  console.log(posts, "", isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserPost());
  }, []);
  return (
    <div>
      <Header />
      <StyledContainer maxWidth="xl">
        <Grid container>
          {/* First column */}
          <Grid item xs={12} sm={3} style={{ paddingLeft: "0rem" }}>
            <Sidebar />
          </Grid>
          {/* Second column */}
          <Grid item xs={12} sm={6} style={{ padding: "0rem 2rem" }}>
            <UserCardContainer>
              <UserCardHeader>
                <UserCardProfileImage
                  src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                  alt="Profile"
                />
                <UserCardProfileName>John Doe</UserCardProfileName>
              </UserCardHeader>
              <UserCardContent>
                <textarea
                  rows="4"
                  cols="50"
                  placeholder="What's on your mind?"
                  style={{
                    border: "none",
                    width: "100%",
                    resize: "none",
                    outline: "none",
                    overflow: "hidden",
                  }}
                />
              </UserCardContent>
              <UserCardActions>
                <UserCardActionButton>
                  <img
                    src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                    alt="Phot"
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "8px",
                    }}
                  />
                  Photo/Video
                </UserCardActionButton>
                <UserCardActionButton>
                  <img
                    src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                    alt="Tag"
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "8px",
                    }}
                  />
                  Tag Friends
                </UserCardActionButton>
                <UserCardActionButton>
                  <img
                    src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                    alt="Feeling"
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "8px",
                    }}
                  />
                  Feeling/Activity
                </UserCardActionButton>
              </UserCardActions>
            </UserCardContainer>
            {isLoading ? (
              <Loader />
            ) : (
              posts?.map((card) => <UserPost posts={card} />)
            )}
          </Grid>
          {/* Third column */}
          <Grid item xs={12} sm={3}>
            <RightSidebar />
          </Grid>
        </Grid>
      </StyledContainer>
    </div>
  );
};
const UserCardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

const UserCardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const UserCardProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
`;

const UserCardProfileName = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

const UserCardContent = styled.div`
  font-size: 14px;
  margin-bottom: 16px;
`;

const UserCardActions = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #dddfe2;
  padding-top: 8px;
`;

const UserCardActionButton = styled.button`
  background-color: transparent;
  border: none;
  color: #1877f2;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-right: 16px;

  &:hover {
    text-decoration: underline;
  }
`;
