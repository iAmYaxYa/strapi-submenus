import { useAppContext } from "../Context";
import sublinks from "../data";

const NavLinks = () => {
  const { setPageId } = useAppContext();
  return (
    <div className="nav-links">
      {sublinks?.map((sublink) => {
        const { page, pageId } = sublink;
        return (
          <button
            onMouseEnter={() => setPageId(pageId)}
            className="nav-link"
            key={pageId}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default NavLinks;
