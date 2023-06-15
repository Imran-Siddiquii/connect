import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

const StyledAppBar = styled(AppBar)`
  background-color: #4267b2;
  position: sticky;
  top: 0;
`;

const Header = () => {
  return (
    <StyledAppBar>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Facebook
        </Typography>
        <Typography
          variant="body2"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Home
        </Typography>
        <Typography
          variant="body2"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Profile
        </Typography>
        <Typography
          variant="body2"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Messages
        </Typography>
        {/* Add more components/icons/buttons as needed */}
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
