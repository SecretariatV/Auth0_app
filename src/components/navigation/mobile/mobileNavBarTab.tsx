import { NavLink } from "react-router-dom";

function MobileNavBarTab({
  path,
  label,
  handleClick,
}: {
  path: string;
  label: string;
  handleClick: () => void;
}) {
  return (
    <NavLink
      onClick={handleClick}
      to={path}
      end
      className={({ isActive }) =>
        "mobile-nav-bar__tab " + (isActive ? "mobile-nav-bar__tab--active" : "")
      }
    >
      {label}
    </NavLink>
  );
}

export default MobileNavBarTab;
