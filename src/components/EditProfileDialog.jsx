import { Box, Button, Grid, Paper, TextField, styled } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../container/Profile/ProfileSlice";

export default function EditProfileDialog({ open, handleClose, profile }) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [editProfile, setEditProfile] = useState({
    firstName: profile.firstName,
    lastName: profile.lastName,
    bio: profile?.bio,
    portfolio_url: profile?.portfolio_url,
  });
  const dispatch = useDispatch();
  const handleChange = (field, value) => {
    setEditProfile((prev) => {
      return {
        ...prev,
        [field]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateUser({ editProfile }));
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Edit Profile"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Box sx={{ width: "100%", marginTop: "1rem" }}>
              <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={12}>
                  <form onSubmit={handleSubmit}>
                    <TextField
                      style={{ marginBottom: "20px" }}
                      label="firstName"
                      fullWidth
                      value={editProfile?.firstName}
                      onChange={(e) =>
                        handleChange("firstName", e.target.value)
                      }
                    />
                    <TextField
                      style={{ marginBottom: "20px" }}
                      label="lastName"
                      fullWidth
                      value={editProfile.lastName}
                      onChange={(e) => handleChange("lastName", e.target.value)}
                    />
                    <TextField
                      style={{ marginBottom: "20px" }}
                      label="PortFolio URL"
                      value={editProfile?.portfolio_url}
                      fullWidth
                      onChange={(e) =>
                        handleChange("portfolio_url", e.target.value)
                      }
                    />
                    <TextField
                      style={{ marginBottom: "20px" }}
                      id="outlined-multiline-static"
                      label="bio"
                      multiline
                      fullWidth
                      value={editProfile?.bio}
                      rows={4}
                      onChange={(e) => handleChange("bio", e.target.value)}
                    />
                    <Button
                      style={{ marginRight: "1rem" }}
                      onClick={handleClose}
                      variant="contained"
                    >
                      Close
                    </Button>
                    <Button type="submit" variant="contained">
                      Save
                    </Button>
                  </form>
                </Grid>
              </Grid>
            </Box>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
