import { useState } from "react";
import Post from "../components/Post";
import { usePosts } from "../context/PostsContexts";

const Home = () => {
  const [newPostContent, setNewPostContent] = useState("");
  const { posts, addPost } = usePosts();

  const handleSubmit = (e) => {
    e.preventDefault();
    //guard clause for preventing to post a blank post
    if (!newPostContent.trim()) return;
    addPost(newPostContent);
    setNewPostContent("");
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">Home Feed</h2>
      <form onSubmit={handleSubmit} className="mb-4 border p-2 rounded">
        <input
          placeholder="What is on your mind!? write it."
          type="text"
          onChange={(e) => setNewPostContent(e.target.value)}
          value={newPostContent}
          className="border p-2 mb-2 w-full rounded"
        />
        <button className="bg-blue-500 p-2  text-white  rounded  px-6">
          Post
        </button>
      </form>
      {posts.map((post) => (
        <Post key={post.id} content={post.content} />
      ))}
    </div>
  );
};
export default Home;
