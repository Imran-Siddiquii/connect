import {
  Avatar,
  Box,
  Button,
  Grid,
  Input,
  Paper,
  TextField,
  TextareaAutosize,
  styled,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

export default function EditProfileDialog({ open, handleClose }) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [editProfile, setEditProfile] = useState({
    name: "",
    username: "",
    bio: "",
    portfolio_url: "",
  });

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
    console.log("check");
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Edit Profiler"}</DialogTitle>
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
                      label="Username"
                      fullWidth
                      onChange={(e) => handleChange("username", e.target.value)}
                    />
                    <TextField
                      style={{ marginBottom: "20px" }}
                      label="name"
                      fullWidth
                      onChange={(e) => handleChange("name", e.target.value)}
                    />
                    <TextField
                      style={{ marginBottom: "20px" }}
                      label="PortFolio URL"
                      fullWidth
                      onChange={(e) =>
                        handleChange("portfolio_url", e.target.value)
                      }
                    />
                    <TextField
                      style={{ marginBottom: "20px" }}
                      id="outlined-multiline-static"
                      label="Bio"
                      multiline
                      fullWidth
                      rows={4}
                      defaultValue=" "
                      onChange={(e) => handleChange("bio", e.target.value)}
                    />
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
