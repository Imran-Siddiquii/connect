import React from "react";
import {
  LeftSideContainer,
  NavLinkDiv,
  ProfileContainer,
  ProfileName,
  SidebarIcon,
  SidebarIconImage,
  SidebarIconText,
  StickyColumn,
} from "../style";
import { styled as bookmark } from "styled-components";
import { Bookmark, FavoriteOutlined, Home } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { CreatePost } from "../../components/CreatePost";

export const Sidebar = () => {
  const { profile } = useSelector((state) => state.userProfile);

  return (
    <StickyColumn>
      <LeftSideContainer>
        <NavLinkDiv to="/profile">
          <ProfileContainer>
            <Avatar
              alt="Remy Sharp"
              variant="Round"
              sx={{ width: 50, height: 50 }}
              style={{
                padding: 0,
                marginRight: "15px",
                cursor: "pointer",
                display: "flex",
              }}
              src={process.env.PUBLIC_URL + profile.avatar}
            />
            <ProfileName>
              {profile.firstName} {profile.lastName}
            </ProfileName>
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
        <CreatePost button={true} />
      </LeftSideContainer>
    </StickyColumn>
  );
};
