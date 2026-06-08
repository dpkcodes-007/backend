import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-slate-900 text-white p-4">
      <div className="flex justify-center gap-8">

        <Link
          to="/"
          className="hover:text-cyan-400"
        >
          🏠 Home
        </Link>

        <Link
          to="/normal"
          className="hover:text-cyan-400"
        >
          📚 Normal Methods
        </Link>

        <Link
          to="/hoam"
          className="hover:text-cyan-400"
        >
          ⚡ HOAM
        </Link>

        <Link
          to="/profile"
          className="hover:text-cyan-400"
        >
          👤 Profile
        </Link>

      </div>
    </nav>
  );
};

export default NavBar;