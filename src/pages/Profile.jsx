import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2 className="text-2xl mb-4">User profile</h2>
      {user ? (
        <p>Welcome, {user.username}</p>
      ) : (
        <p>Please login to see your profile.</p>
      )}
    </div>
  );
};
export default Profile;
