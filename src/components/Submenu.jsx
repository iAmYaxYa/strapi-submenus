import { useRef } from "react";
import { useAppContext } from "../Context";
import sublinks from "../data";

const Submenu = () => {
  const { pageId, setPageId } = useAppContext();

  const submenuItems = sublinks.find((item) => item.pageId === pageId);
  const submenuRef = useRef(null);

  const handleSubmenuClose = (e) => {
    const { left, bottom, right } = submenuRef.current.getBoundingClientRect();
    const { clientX, clientY } = e;
    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
      return;
    }
  };

  return (
    <div
      className={submenuItems ? "submenu show-submenu" : "submenu"}
      ref={submenuRef}
      onMouseLeave={handleSubmenuClose}
    >
      <h5>{submenuItems?.page}</h5>
      <ul
        className="submenu-links"
        style={{
          gridTemplateColumns:
            submenuItems?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {submenuItems?.links.map((link) => {
          const { id, url, icon, label } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon} {label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Submenu;
