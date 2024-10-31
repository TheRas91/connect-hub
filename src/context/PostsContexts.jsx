import { createContext, useContext, useState } from "react";

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    { id: 1, content: "Welcome to Connect Hub!" },
    { id: 2, content: "Here's another post!" },
  ]);

  const addPost = (content) => {
    const newPost = { id: posts.length + 1, content };
    setPosts([...posts, newPost]);
  };

  return (
    <PostsContext.Provider value={{ posts, addPost }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => {
  return useContext(PostsContext);
};
