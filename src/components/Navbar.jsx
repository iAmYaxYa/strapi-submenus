import { useAppContext } from "../Context";
import { FaBars } from "react-icons/fa";
import NavLinks from "./Navlinks";

const Navbar = () => {
  const { openCloseSidebar, setPageId } = useAppContext();

  const handleSubmenu = (e) => {
    if (e.target.classList.contains("nav-link")) {
      return;
    }
    setPageId(null);
  };
  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <h3 className="logo">Strapi</h3>
        <button onClick={openCloseSidebar} className="toggle-btn" type="button">
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
