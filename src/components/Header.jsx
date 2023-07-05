import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import {
  NavLinkDiv,
  ProfileContainer,
  ProfileName,
  SidebarIconText,
} from "../container/style";
import { Bookmark, FavoriteOutlined } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logout } from "../pages/Auth/Reducer";
import { clearUserDetail } from "../container/Profile/ProfileSlice";

const StyledAppBar = styled(AppBar)`
  background-color: #4267b2;
  position: sticky;
  top: 0;
  z-index: 99 !important;
`;

const typoColor = {
  color: "white",
  padding: "0 1rem",
};

const Header = () => {
  const { profile } = useSelector((state) => state.userProfile);
  const { token } = useSelector((state) => state.Auth);
  const Auth = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <StyledAppBar>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLinkDiv to="/" style={{ color: "white" }}>
            Connect
          </NavLinkDiv>
        </Typography>

        <NavLinkDiv to="/profile" style={typoColor}>
          <ProfileContainer style={{ marginBottom: "0rem" }}>
            {profile.firstName ? (
              <>
                <Avatar
                  alt="Remy Sharp"
                  variant="Round"
                  style={{
                    padding: 0,
                    marginRight: "15px",
                    cursor: "pointer",
                    display: "flex",
                  }}
                  src={profile.avatar}
                />
                <ProfileName>
                  {profile.firstName} {profile.lastName}
                </ProfileName>
              </>
            ) : null}
          </ProfileContainer>
        </NavLinkDiv>
        <NavLinkDiv to="/bookmark" style={typoColor}>
          <Typography
            variant="body2"
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <Bookmark />
          </Typography>
        </NavLinkDiv>
        <NavLinkDiv to="/liked-post" style={typoColor}>
          <Typography
            style={{ color: "white" }}
            variant="body2"
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <FavoriteOutlined />
          </Typography>
        </NavLinkDiv>
        <Typography
          variant="body2"
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          <Button variant="outlined" style={{ background: "white" }}>
            <SidebarIconText>Post</SidebarIconText>
          </Button>
        </Typography>
        {Auth || token ? (
          <Button
            variant="outlined"
            style={{ background: "white", margin: "0 1rem" }}
            onClick={() => {
              dispatch(Logout());
              dispatch(clearUserDetail());
              localStorage.removeItem("token");
              navigate("/login");
            }}
          >
            <SidebarIconText>Logout</SidebarIconText>
          </Button>
        ) : (
          <Button
            variant="outlined"
            style={{ background: "white", margin: "0 1rem" }}
            onClick={() => {
              navigate("/login");
            }}
          >
            <SidebarIconText>Login</SidebarIconText>
          </Button>
        )}
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
