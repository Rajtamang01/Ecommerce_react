import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="bg-yellow-900 text-white flex justify-between items-center py-6 px-4">
      <h1 className="font-bold text-2xl">Hamro Pasal</h1>
      <nav>
        <ul className="flex gap-3">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"About.jsx"}>About Us</Link>
          </li>
          <li>
            <Link to={"/"}>Location</Link>
          </li>
        </ul>
      </nav>
      <div className="flex gap-3">
        <Link
          to={"/signup"}
          className="bg-white text-black border py-1 px-3 rounded"
        >
          SignUp
        </Link>
        <Link
          to={"/login"}
          className="bg-white text-black border py-1 px-3 rounded"
        >
          LognIn
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
