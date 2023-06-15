import React from "react";
import {
  RightSidebarContainer,
  RightSidebarItem,
  RightSidebarItemImage,
  RightSidebarItemText,
  StickyColumn,
} from "../style";

export const RightSidebar = () => {
  return (
    <StickyColumn>
      <RightSidebarContainer>
        <RightSidebarItem>
          <RightSidebarItemImage
            src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
            alt="Friends"
          />
          <RightSidebarItemText>Friends</RightSidebarItemText>
        </RightSidebarItem>
        <RightSidebarItem>
          <RightSidebarItemImage
            src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
            alt="Groups"
          />
          <RightSidebarItemText>Groups</RightSidebarItemText>
        </RightSidebarItem>
        <RightSidebarItem>
          <RightSidebarItemImage
            src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
            alt="Events"
          />
          <RightSidebarItemText>Events</RightSidebarItemText>
        </RightSidebarItem>
        {/* Add more right sidebar items as needed */}
      </RightSidebarContainer>
    </StickyColumn>
  );
};
