import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Imran",
    lastName: "Sidd",
    username: "@imran",
    avatar: "Icon_user.png",
    password: "imran123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "John",
    lastName: "Doe",
    username: "@johndoe",
    password: "John@",
    avatar: "Avataruser.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Clair",
    lastName: "Wilson",
    username: "@ClairWilson",
    password: "clairwilson123",
    avatar: "FeA.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Mia",
    lastName: "Adam",
    avatar: "FemalA.png",
    username: "@miadam",
    password: "miadam123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
