import { Avatar, Box, Button, Grid, Paper, styled } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { updateAvatar } from "../container/Profile/ProfileSlice";
import { useDispatch } from "react-redux";
import { notification } from "antd";
import { openNotificationWithIcon } from "./Notify";

export default function AvatarDailog({ open, handleClose }) {
  const dispatch = useDispatch();
  const [api, contextHolder] = notification.useNotification();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const AvartarList = [
    {
      Avatar: "Avataruser.png",
    },
    {
      Avatar: "FeA.png",
    },
    {
      Avatar: "FemalA.png",
    },
    {
      Avatar: "Femaleavatar-png.png",
    },
    {
      Avatar: "AvatarProfilePNG.png",
    },
    {
      Avatar: "Computer-icons-.png",
    },
    {
      Avatar: "Cons_user.png",
    },
  ];
  const handleAvatarChange = (avatar) => {
    dispatch(updateAvatar(avatar));
    openNotificationWithIcon(api, "success", "Profile Updated");
    handleClose();
  };
  return (
    <div>
      {contextHolder}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Choose Avatar"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Box sx={{ width: "100%" }}>
              <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {AvartarList.map((avatar) => (
                  <Grid item xs={4} key={avatar.Avatar}>
                    <Avatar
                      alt="Remy Sharp"
                      variant="square"
                      style={{ padding: 0, margin: 0, cursor: "pointer" }}
                      src={avatar.Avatar}
                      sx={{ width: 175, height: 130 }}
                      onClick={() => handleAvatarChange(avatar.Avatar)}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
