import styled from "styled-components";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Sidebar } from "../../container/Sidebar";
import { RightSidebar } from "../../container/RightSideBar";
import BasicTabs from "../../components/UserTab";

export const Home = () => {
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
            <BasicTabs />
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

const StyledContainer = styled(Container)`
  height: 100vh;
  margin-top: 4.5rem;
  padding: 0 !important;
`;
