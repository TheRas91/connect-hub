import { useAuth } from "../context/AuthContext";
import { useNotifications } from "../context/NotificationsContext";

const Header = () => {
  const { user, logout } = useAuth();
  const { addNotification } = useNotifications();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    addNotification("You logged out successfully.");
  };

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md fixed w-full top-0 z-10 flex justify-between pr-36 items-center">
      <h1 className="text-2xl font-bold">Connect Hub</h1>
      {user && (
        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 rounded-md hover:bg-red-600"
        >
          Logout
        </button>
      )}
    </header>
  );
};
export default Header;
