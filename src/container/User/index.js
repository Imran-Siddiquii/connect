import React from "react";
import { StyledContainer } from "../Profile";
import { Grid } from "@mui/material";
import { Sidebar } from "../Sidebar";
import BasicTabs from "../../components/UserTab";
import { RightSidebar } from "../RightSideBar";
import { useParams } from "react-router-dom";

export const Users = () => {
  const { id } = useParams();
  console.log("🚀 ~ file: index.js:11 ~ Users ~ id:", id);
  return (
    <div>
      <StyledContainer maxWidth="xl">
        <Grid container>
          {/* First column */}
          <Grid
            item
            xs={12}
            sm={3}
            style={{ paddingLeft: "0rem" }}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Sidebar />
          </Grid>
          {/* Second column */}
          <Grid item xs={12} sm={6} style={{ padding: "0rem 2rem" }}>
            {/* <BasicTabs /> */}
          </Grid>
          {/* Third column */}
          <Grid
            item
            xs={12}
            sm={3}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <RightSidebar />
          </Grid>
        </Grid>
      </StyledContainer>
    </div>
  );
};
