import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../../buttons/loginButton";
import LogoutButton from "../../buttons/logoutButton";
import SignupButton from "../../buttons/signupButton";

function NavBarButtons() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="nav-bar__buttons">
      {!isAuthenticated && (
        <>
          <SignupButton />
          <LoginButton />
        </>
      )}
      {isAuthenticated && <LogoutButton />}
    </div>
  );
}

export default NavBarButtons;
