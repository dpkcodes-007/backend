import { NavLink } from "react-router-dom";
import {
  FaNewspaper,
  FaBookmark,
  FaHome,
  FaInfoCircle,
  FaList,
} from "react-icons/fa";

const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/",
    icon: <FaHome />,
  },
  {
    id: 2,
    name: "Categories",
    path: "/categories",
    icon: <FaList />,
  },
  {
    id: 3,
    name: "Saved",
    path: "/saved",
    icon: <FaBookmark />,
  },
  {
    id: 4,
    name: "About",
    path: "/about",
    icon: <FaInfoCircle />,
  },
];

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <FaNewspaper />
          NewsFeed
        </div>

        <div className="flex gap-6">
          {navLinks.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-2 transition ${
                  isActive
                    ? "text-yellow-300 font-semibold"
                    : "hover:text-yellow-300"
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;