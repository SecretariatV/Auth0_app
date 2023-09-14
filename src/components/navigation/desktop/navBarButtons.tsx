import { useAuth0 } from "@auth0/auth0-react";

function NavBarButtons() {
  const { isAuthenticated } = useAuth0();

  return <div className="nav-bar__buttons">{!isAuthenticated && <></>}</div>;
}

export default NavBarButtons;
