import { Button, Dialog, DialogTitle, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import { SidebarIconText } from "../container/style";
import CustomizedDialogs from "../container/Dialog";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";

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
          {/* <CloseIcon /> */}
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}
export const CreatePost = ({ button, openDialog, handleOpenDialog, posts }) => {
  const [open, setOpen] = React.useState(false);
  const { profile } = useSelector((state) => state.userProfile);
  useEffect(() => {
    if (openDialog) {
      setOpen(true);
    }
  }, [openDialog]);
  const handleClickOpen = () => {
    setOpen(true);
    if (openDialog) {
      handleOpenDialog();
    }
  };
  const handleClose = () => {
    setOpen(false);
    if (openDialog) {
      handleOpenDialog();
    }
  };
  return (
    <div>
      {button ? (
        <Button variant="contained" onClick={handleClickOpen}>
          <SidebarIconText>Create a post</SidebarIconText>
        </Button>
      ) : null}
      <CustomizedDialogs
        open={open}
        handleClose={handleClose}
        title={"Create a post"}
        postButtonText={button ? "Post" : "Update Post"}
        profile={profile}
        posts={posts}
      />
    </div>
  );
};
