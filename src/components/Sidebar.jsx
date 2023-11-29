import { useAppContext } from "../Context";
import sublinks from "../data";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const { isSidebar, openCloseSidebar } = useAppContext();

  return (
    <div className={isSidebar ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-container">
        <div className="close-btn" onClick={openCloseSidebar}>
          <FaTimes />
        </div>
        {sublinks?.map((sublink) => {
          const { page, pageId, links } = sublink;
          return (
            <article key={pageId}>
              <h4>{page}</h4>
              <ul className="sidebar-sublinks">
                {links?.map((link) => {
                  const { id, label, icon, url } = link;
                  return (
                    <li key={id}>
                      <a href={url}>
                        {icon}
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
