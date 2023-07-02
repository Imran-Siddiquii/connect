import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "Awesome view 😃",
    postImageUrl:
      "https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=612x612&w=0&k=20&c=lpQ1sQI49bYbTp9WQ_EfVltAqSP1DXg0Ia7APTjjxz4=",
    userImage:
      "https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
    likes: {
      dislikeCount: 0,
      likeCount: 15,
      likedBy: [],
      dislikedBy: [],
    },
    name: "Imran sidd",
    username: "@imran",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",

    postImageUrl:
      "https://st.depositphotos.com/1018113/4659/i/950/depositphotos_46595017-stock-photo-stone-stairs-in-a-park.jpg",
    userImage:
      "https://i.pinimg.com/originals/f3/1e/6b/f31e6bf4eaee4e6d25ead5ab4db6e5d7.jpg",
    likes: {
      dislikeCount: 0,
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    name: "Steven Willson",
    username: "@stevenwillson",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    postImageUrl:
      "https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg",
    userImage:
      "https://images.unsplash.com/photo-1516571416226-75244e50766f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80",
    likes: {
      dislikeCount: 0,
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    name: "Neil Jacob",
    username: "@neiljacob",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system,",
    postImageUrl:
      "https://images.pexels.com/photos/1353126/pexels-photo-1353126.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    userImage:
      "https://images.unsplash.com/photo-1520967782066-e09c18e5d1b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    likes: {
      dislikeCount: 0,
      likeCount: 32,
      likedBy: [],
      dislikedBy: [],
    },
    name: "Adam Cooper",
    username: "@adamcooper",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "On the other hand, we denounce with righteous ",
    postImageUrl:
      "https://images.pexels.com/photos/1353126/pexels-photo-1353126.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    userImage:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    likes: {
      dislikeCount: 0,
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    name: "John Doe",
    username: "@johndoe",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
