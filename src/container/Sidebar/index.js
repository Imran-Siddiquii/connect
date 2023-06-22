import React from "react";
import {
  LeftSideContainer,
  NavLinkDiv,
  ProfileContainer,
  ProfileName,
  SidebarIcon,
  SidebarIconImage,
  SidebarIconText,
  StickyColumn,
} from "../style";
import { styled as bookmark } from "styled-components";
import { Bookmark, FavoriteOutlined, Home } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
// import * as React from "react";
import PropTypes from "prop-types";
// import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import CustomizedDialogs from "../Dialog";
import { useSelector } from "react-redux";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
export const Sidebar = () => {
  const [open, setOpen] = React.useState(false);
  const { profile } = useSelector((state) => state.userProfile);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <StickyColumn>
      <LeftSideContainer>
        <NavLinkDiv to="/profile">
          <ProfileContainer>
            <Avatar
              alt="Remy Sharp"
              variant="Round"
              sx={{ width: 50, height: 50 }}
              style={{
                padding: 0,
                marginRight: "15px",
                cursor: "pointer",
                display: "flex",
              }}
              src={profile?.userAvatar}
            />
            <ProfileName>
              {profile.firstName} {profile.lastName}
            </ProfileName>
          </ProfileContainer>
        </NavLinkDiv>
        <NavLinkDiv to="/">
          <SidebarIcon>
            <SidebarIconImage>
              <Home />
            </SidebarIconImage>
            <SidebarIconText>Home</SidebarIconText>
          </SidebarIcon>
        </NavLinkDiv>
        <NavLinkDiv to="/bookmark">
          <SidebarIcon>
            <SidebarIconImage>
              <Bookmark />
            </SidebarIconImage>
            <SidebarIconText>Bookmark</SidebarIconText>
          </SidebarIcon>
        </NavLinkDiv>
        <NavLinkDiv to="/liked-post">
          <SidebarIcon>
            <SidebarIconImage>
              <FavoriteOutlined />
            </SidebarIconImage>
            <SidebarIconText>Liked Post</SidebarIconText>
          </SidebarIcon>
        </NavLinkDiv>
        <Button variant="contained" onClick={handleClickOpen}>
          <SidebarIconText>Create a post</SidebarIconText>
        </Button>
        <CustomizedDialogs
          open={open}
          handleClose={handleClose}
          title={"Create a post"}
          postButtonText={"Post"}
        />
      </LeftSideContainer>
    </StickyColumn>
  );
};
