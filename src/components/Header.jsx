import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { NavLinkDiv, SidebarIconText } from "../container/style";
import { Bookmark, FavoriteOutlined } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import { useSelector } from "react-redux";

const StyledAppBar = styled(AppBar)`
  background-color: #4267b2;
  position: sticky;
  top: 0;
`;

const typoColor = {
  color: "white",
  padding: "0 1rem",
};

const Header = () => {
  const { profile } = useSelector((state) => state.userProfile);
  return (
    <StyledAppBar>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLinkDiv to="/" style={{ color: "white" }}>
            Connect
          </NavLinkDiv>
        </Typography>

        <NavLinkDiv to="/profile" style={typoColor}>
          <Avatar />
          <Typography
            variant="body2"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {profile.username}
          </Typography>
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
        <Button
          variant="outlined"
          style={{ background: "white", margin: "0 1rem" }}
          onClick={() => localStorage.removeItem("token")}
        >
          <SidebarIconText>Logout</SidebarIconText>
        </Button>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
