import { useAuth0 } from "@auth0/auth0-react";
import MobileNavBarTab from "./mobileNavBarTab";

function MobileNavBarTabs({ handleClick }: { handleClick: () => void }) {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="mobile-nav-bar__tabs">
      <MobileNavBarTab
        path="/profile"
        label="Profile"
        handleClick={handleClick}
      />
      <MobileNavBarTab
        path="/public"
        label="Public"
        handleClick={handleClick}
      />
      {isAuthenticated && (
        <>
          <MobileNavBarTab
            path="/protected"
            label="Protected"
            handleClick={handleClick}
          />
          <MobileNavBarTab
            path="/admin"
            label="Admin"
            handleClick={handleClick}
          />
        </>
      )}
    </div>
  );
}

export default MobileNavBarTabs;
