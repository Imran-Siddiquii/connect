import { Edit } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Grid,
  IconButton,
  Paper,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import AvatarDailog from "./AvatarDailog";
import { useSelector } from "react-redux";
import EditProfileDialog from "./EditProfileDialog";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export const ProfileCard = () => {
  const { isLoading, isError, profile } = useSelector(
    (state) => state.userProfile
  );
  const { firstName, lastName, username, avatar, followers, following } =
    profile;
  const [open, setOpen] = useState(false);
  const [openEditprofile, setOpenEditprofile] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ width: "100%", border: "1px solid red" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
        <Grid item xs={4}>
          <div style={{ position: "relative" }}>
            <Avatar
              alt="Remy Sharp"
              variant="square"
              style={{ padding: 0, margin: 0 }}
              //   src="/static/images/avatar/1.jpg"
              backgroundColor="red"
              src="Icons_user.png"
              sx={{ width: 175, height: 150 }}
            />
            <Tooltip title="Edit Avatar">
              <IconButton
                onClick={() => handleClickOpen()}
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: "55px",
                  color: "white",
                  backgroundColor: "#1976d2",
                  borderRadius: "50%",
                  zIndex: 1,
                }}
              >
                <Edit />
              </IconButton>
            </Tooltip>
            <AvatarDailog open={open} handleClose={handleClose} />
          </div>
        </Grid>
        <Grid item xs={8}>
          <div style={{ position: "relative" }}>
            <Typography variant="h6">{`${firstName}  ${lastName}`}</Typography>
            <Typography variant="body1"> Username : {username}</Typography>
            <Typography variant="body1">
              Portfolio Url: <a href="https://example.com">example.com</a>
            </Typography>
            <Typography variant="body1">Bio:</Typography>
            <Typography variant="body1">Followers:</Typography>
            <Typography variant="body1">Following:</Typography>
            <Tooltip title="Edit Profile">
              <IconButton
                onClick={() => setOpenEditprofile(true)}
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: "55px",
                  color: "white",
                  backgroundColor: "#1976d2",
                  borderRadius: "50%",
                  zIndex: 1,
                }}
              >
                <Edit />
              </IconButton>
            </Tooltip>
            <EditProfileDialog
              open={openEditprofile}
              handleClose={() => setOpenEditprofile(false)}
            />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};
