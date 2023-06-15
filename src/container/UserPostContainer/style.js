import { styled } from "styled-components";

export const UserPostContent = styled.div`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const UserPostImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 16px;
`;

export const UserPostContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

export const UserPostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const UserPostProfile = styled.div`
  display: flex;
  align-items: center;
`;

export const UserPostProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const UserPostProfileName = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

export const UserPostActions = styled.div`
  display: flex;
  align-items: center;
`;

export const UserPostAction = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
  font-size: 14px;
`;

export const UserPostActionButton = styled.button`
  background-color: transparent;
  border: none;
  color: #1877f2;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-left: 4px;

  &:hover {
    text-decoration: underline;
  }
`;
