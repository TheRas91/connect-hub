import { useNotifications } from "../context/NotificationsContext";

const Notifications = () => {
  const { notifications } = useNotifications();

  return (
    <div className="fixed top-16 right-4 space-y-2 z-50">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="bg-blue-500 text-white p-3 rounded-md shadow-md"
        >
          {notification.message}
        </div>
      ))}
    </div>
  );
};
export default Notifications;
