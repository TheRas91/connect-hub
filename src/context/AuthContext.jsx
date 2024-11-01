import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState({
    username: "",
    bio: "",
    location: "",
  });

  const login = (userData) => {
    setUser(userData);
  };
  const logout = () => {
    setUser(null);
  };

  const updateUserProfile = (userProfileData) => {
    setUserProfile(userProfileData);
  };

  return (
    <AuthContext.Provider
      value={{ user, userProfile, updateUserProfile, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
