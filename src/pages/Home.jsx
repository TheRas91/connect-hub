import { useState } from "react";
import Post from "../components/Post";
import { usePosts } from "../context/PostsContexts";
import { useNotifications } from "../context/NotificationsContext";

const Home = () => {
  const [newPostContent, setNewPostContent] = useState("");
  const { posts, addPost } = usePosts();
  const { addNotification } = useNotifications();

  const handleSubmit = (e) => {
    e.preventDefault();
    //guard clause for preventing to post a blank post
    if (!newPostContent.trim()) return;
    addPost(newPostContent);
    setNewPostContent("");
    addNotification("Post created successfully!");
  };

  return (
    <div className="p-8 ">
      <h2 className="text-3xl font-bold mb-6">Home Feed</h2>
      <form onSubmit={handleSubmit} className="mb-6 border p-2 rounded">
        <textarea
          placeholder="What is on your mind!? write it."
          type="text"
          onChange={(e) => setNewPostContent(e.target.value)}
          value={newPostContent}
          className="border p-4 mb-2 w-full h-24 mb-2 resize-none rounded-md"
        />
        <button className="bg-blue-500 p-2 px-6 text-white rounded-md shadow hover:bg-blue-600">
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
