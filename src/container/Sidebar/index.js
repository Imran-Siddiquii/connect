import React from "react";
import {
  LeftSideContainer,
  NavLinkDiv,
  ProfileContainer,
  ProfileImage,
  ProfileName,
  SidebarIcon,
  SidebarIconImage,
  SidebarIconText,
  StickyColumn,
} from "../style";
import { NavLink } from "react-router-dom";
import { styled as bookmark } from "styled-components";
import { Bookmark, FavoriteOutlined, Home } from "@mui/icons-material";
import { Button } from "@mui/material";
// import * as React from "react";
import PropTypes from "prop-types";
// import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import CustomizedDialogs from "../Dialog";

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
            <ProfileImage
              src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
              alt="Profile"
            />
            <ProfileName>John Doe</ProfileName>
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
        {/* <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          >
            Modal title
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </Typography>
            <Typography gutterBottom>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor.
            </Typography>
            <Typography gutterBottom>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
              dui. Donec ullamcorper nulla non metus auctor fringilla.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Save changes
            </Button>
          </DialogActions>
        </BootstrapDialog> */}
      </LeftSideContainer>
    </StickyColumn>
  );
};
