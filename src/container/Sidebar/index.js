import React from "react";
import {
  LeftSideContainer,
  ProfileContainer,
  ProfileImage,
  ProfileName,
  SidebarIcon,
  SidebarIconImage,
  SidebarIconText,
  StickyColumn,
} from "../style";

export const Sidebar = () => {
  return (
    <StickyColumn>
      <LeftSideContainer>
        <ProfileContainer>
          <ProfileImage
            src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
            alt="Profile"
          />
          <ProfileName>John Doe</ProfileName>
        </ProfileContainer>
        <SidebarIcon>
          <SidebarIconImage
            src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
            alt="Home"
          />
          <SidebarIconText>Home</SidebarIconText>
        </SidebarIcon>
        <SidebarIcon>
          <SidebarIconImage
            src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
            alt="Profile"
          />
          <SidebarIconText>Profile</SidebarIconText>
        </SidebarIcon>
        <SidebarIcon>
          <SidebarIconImage
            src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
            alt="Messages"
          />
          <SidebarIconText>Messages</SidebarIconText>
        </SidebarIcon>
      </LeftSideContainer>
    </StickyColumn>
  );
};
