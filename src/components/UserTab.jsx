import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import { UserPost } from "../container/UserPostContainer";
import { Feed, NewReleases, TrendingUp } from "@mui/icons-material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const { posts, isLoading, isError } = useSelector((state) => state.posts);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          style={{
            display: "flex",
            justifyContent: "space-around!important",
          }}
        >
          <Tab
            style={{ width: "33.33%" }}
            icon={<Feed />}
            iconPosition="start"
            label="User Feed"
            {...a11yProps(0)}
          />
          <Tab
            icon={<NewReleases />}
            iconPosition="start"
            style={{ width: "33.34%" }}
            label="Latest"
            {...a11yProps(1)}
          />
          <Tab
            icon={<TrendingUp />}
            iconPosition="start"
            style={{ width: "33.33%" }}
            label="Trending"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {isLoading ? (
          <Loader />
        ) : (
          posts?.map((card) => <UserPost key={card.id} posts={card} />)
        )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {isLoading ? (
          <Loader />
        ) : (
          posts
            ?.slice()
            ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map((card) => <UserPost key={card.id} posts={card} />)
        )}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {isLoading ? (
          <Loader />
        ) : (
          posts
            ?.slice()
            ?.sort(
              (a, b) =>
                Number(b?.likes?.likeCount) - Number(a?.likes?.likeCount)
            )
            .map((card) => <UserPost key={card.id} posts={card} />)
        )}
      </TabPanel>
    </Box>
  );
}
