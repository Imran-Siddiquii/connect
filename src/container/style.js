import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const StickyColumn = styled.div`
  position: fixed;
  top: 4rem;
  width: 25%;
  height: 100%;
  overflow-y: auto;
  ${"" /* border: 1px solid red; */}
  box-shadow: 2px 2px 8px 1px #7fbaf5;
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
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const ProfileName = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
`;

export const SidebarIcon = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0rem;
`;

export const SidebarIconImage = styled.div`
  width: 35px;
  height: 30px;
  margin-right: 12px;
`;

export const SidebarIconText = styled.div`
  font-size: 1.3rempx;
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
  position: relative;
  width: 80%;
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

export const NavLinkDiv = styled(NavLink)`
  color: #1976d2;
  underline: none;
  text-decoration: none;
`;
