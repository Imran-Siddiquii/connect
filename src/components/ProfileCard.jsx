import { Edit } from "@mui/icons-material";
import {
  Avatar,
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
import EditProfileDialog from "./EditProfileDialog";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export const ProfileCard = ({ profile, edit }) => {
  const {
    firstName,
    lastName,
    username,
    avatar,
    bio,
    portfolio_url,
    followers,
    following,
  } = profile;
  const [open, setOpen] = useState(false);
  const [openEditprofile, setOpenEditprofile] = useState(false);

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);
  const handleCloseProfileDetails = () => setOpenEditprofile(false);
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: "5px",
        margin: "1rem 0rem",
        boxShadow: "2px 2px 8px 1px #7fbaf5",
      }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 0, sm: 0, md: 0 }}>
        <Grid item xs={4} style={{ marginBottom: "10px" }}>
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              variant="Round"
              style={{ padding: 0, margin: 0 }}
              src={avatar}
              sx={{ width: 150, height: 160 }}
            />
            {edit ? (
              <Tooltip title="Edit Avatar">
                <IconButton
                  onClick={() => handleClickOpen()}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: "60px",
                    color: "white",
                    backgroundColor: "#1976d2",
                    borderRadius: "50%",
                    zIndex: 1,
                  }}
                >
                  <Edit />
                </IconButton>
              </Tooltip>
            ) : null}
            <AvatarDailog open={open} handleClose={handleClose} />
          </div>
        </Grid>
        <Grid item xs={8} style={{}}>
          <div style={{ position: "relative" }}>
            <Typography variant="h6">{`${firstName}  ${lastName}`}</Typography>
            <Typography variant="body1"> {username}</Typography>
            <Typography variant="body1">
              Portfolio Url : &nbsp;
              <a target="_blank" rel="noreferrer" href={`${portfolio_url}`}>
                {portfolio_url}
              </a>
            </Typography>
            <Typography variant="body1">Bio : {bio}</Typography>
            <Typography variant="body1">Followers : {followers}</Typography>
            <Typography variant="body1">Following : {following}</Typography>
            {edit ? (
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
            ) : null}
            <EditProfileDialog
              open={openEditprofile}
              handleClose={handleCloseProfileDetails}
              profile={profile}
            />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};
