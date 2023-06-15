import { styled } from "styled-components";

export const StickyColumn = styled.div`
  position: fixed;
  top: 4rem;
  width: 25%;
  height: 100%;
  overflow-y: auto;
  border: 1px solid red;
  background-color: #f3f9ff;
  scrollbar-width: thin;
  scrollbar-color: #ccc #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #aaa;
  }

  &::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }
`;
export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const ProfileName = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

export const SidebarIcon = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const SidebarIconImage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 12px;
`;

export const SidebarIconText = styled.div`
  font-size: 14px;
`;

export const LeftSideContainer = styled.div`
  margin: 2rem;
`;
export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const RightSidebarContainer = styled.div`
  margin: 2rem;
`;

export const RightSidebarItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const RightSidebarItemImage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 12px;
`;

export const RightSidebarItemText = styled.div`
  font-size: 14px;
`;
