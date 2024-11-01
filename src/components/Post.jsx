const Post = ({ content }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-md p-4 my-4 bg-white">
      <p className="text-gray-800">{content}</p>
    </div>
  );
};
export default Post;
