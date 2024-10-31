import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-32 h-full bg-gray-800 text-white fixed">
      <nav className="p-4">
        <ul>
          <li className="mb-4">
            <Link to="/" className="text-lg hover:text-gray-300">
              {" "}
              Home{" "}
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/profile" className="text-lg hover:text-gray-300">
              {" "}
              Profile{" "}
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/login" className="text-lg hover:text-gray-300">
              {" "}
              Login{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
export default Sidebar;
