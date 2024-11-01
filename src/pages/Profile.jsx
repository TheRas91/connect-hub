import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useNotifications } from "../context/NotificationsContext";

const Profile = () => {
  const { user, userProfile, updateUserProfile } = useAuth();
  const [editing, setEditing] = useState(false);
  const [profileData, setProfileData] = useState(userProfile);
  const navigate = useNavigate();
  const { addNotification } = useNotifications();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };
  const handleEditToggle = (e) => {
    e.preventDefault();
    setEditing(!editing);
    if (editing) {
      updateUserProfile(profileData);
      addNotification("Updated successfully!");
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Profile</h2>
      <p className="mb-4 text-xl">Welcome, {user ? user.username : "Guest"}.</p>

      <div className="mb-6">
        <label htmlFor="username" className="block text-gray-700">
          Username:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleChange}
          value={profileData.username}
          disabled={!editing}
          className={`border p-2 rounded-md w-full ${
            editing ? "bg-white" : "bg-gray-100"
          }`}
        />
      </div>

      <div className="mb-6">
        <label htmlFor="bio" className="block text-gray-700">
          Bio:
        </label>
        <textarea
          name="bio"
          id="bio"
          onChange={handleChange}
          value={profileData.bio}
          disabled={!editing}
          className={`border p-2 h-24 rounded-md w-full bg-${
            editing ? "white" : "gray-100"
          }`}
        ></textarea>
      </div>

      <div className="mb-6">
        <label htmlFor="location" className="block text-gray-700">
          Location:
        </label>
        <input
          type="text"
          id="location"
          name="location"
          onChange={handleChange}
          value={profileData.location}
          disabled={!editing}
          className={`border p-2 rounded-md w-full ${
            editing ? "bg-white" : "bg-gray-100"
          }`}
        />
      </div>

      <button
        onClick={handleEditToggle}
        className={`${
          editing ? "bg-green-500" : "bg-blue-500"
        } text-white py-2 px-6 rounded-md shadow mt-4 hover:${
          editing ? "bg-green-600" : "bg-blue-600"
        }`}
      >
        {editing ? "Save" : "Edit"}
      </button>
    </div>
  );
};
export default Profile;
