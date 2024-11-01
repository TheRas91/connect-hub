import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md fixed w-full top-0 z-10 flex justify-between pr-36 items-center">
      <h1 className="text-2xl font-bold">Connect Hub</h1>
      {user && (
        <button
          onClick={logout}
          className="bg-red-500 px-4 rounded-md hover:bg-red-600"
        >
          Logout
        </button>
      )}
    </header>
  );
};
export default Header;
