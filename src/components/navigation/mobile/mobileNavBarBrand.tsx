import { NavLink } from "react-router-dom";

function MobileNavBarBrand({ handleClick }: { handleClick: () => void }) {
  return (
    <div onClick={handleClick} className="mobile-nav-bar__brand">
      <NavLink to="/">
        <img
          className="mobile-nav-bar__logo"
          src="https://cdn.auth0.com/blog/hub/code-samples/hello-world/auth0-logo.svg"
          alt="Auth0 shield logo"
          width="82"
          height="24"
        />
      </NavLink>
    </div>
  );
}

export default MobileNavBarBrand;
