import Post from "../components/Post";

const Home = () => {
  return (
    <div>
      <h2 className="text-2xl mb-4">Home Feed</h2>
      <Post content={"Welcome to Connect Hub!"} />
      <Post content={"Checkout our latest features!"} />
    </div>
  );
};
export default Home;
