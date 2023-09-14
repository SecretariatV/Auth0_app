import NavBarTab from "./navBarTab";
import { useAuth0 } from "@auth0/auth0-react";

function NavBarTabs() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="nav-bar__tabs">
      <NavBarTab path="/profile" label="Profile" />
      <NavBarTab path="/public" label="Public" />
      {isAuthenticated && (
        <>
          <NavBarTab path="/protected" label="Protected" />
          <NavBarTab path="/admin" label="Admin" />
        </>
      )}
    </div>
  );
}

export default NavBarTabs;
