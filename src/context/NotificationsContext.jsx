import { createContext, useContext, useState } from "react";

const NotificationsContext = createContext();

const NotificationsProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message) => {
    const newNotification = { id: Date.now(), message };
    setNotifications((prev) => [...prev, newNotification]);
    //remove after 3s
    setTimeout(() => {
      setNotifications((prev) =>
        prev.filter((n) => n.id !== newNotification.id)
      );
    }, 3000);
  };

  // [{1 ,jhg},{2,hjg},{3,kjhg}]

  return (
    <NotificationsContext.Provider value={{ notifications, addNotification }}>
      {children}
    </NotificationsContext.Provider>
  );
};

const useNotifications = () => useContext(NotificationsContext);

export { NotificationsProvider, useNotifications };
