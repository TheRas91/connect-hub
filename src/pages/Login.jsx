import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useNotifications } from "../context/NotificationsContext";

const Login = () => {
  const { login } = useAuth();
  const { addNotification } = useNotifications();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "user" && password === "pass") {
      login({ username: username });
      addNotification("You logged in successfully! ");
      navigate("/profile");
    } else {
      setError("Invalid credentials! try 'user' and 'pass' instead");
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6">Login</h2>
      {error && (
        <p className="text-red-500 mb-4 p-2 border rounded ">{error}</p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">
            Username
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="border p-2 mb-2 rounded-md w-full"
            id="username"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="border p-2 mb-2 rounded-md w-full"
            id="password"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 px-6 rounded ml-2 rounded-md shadow hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
