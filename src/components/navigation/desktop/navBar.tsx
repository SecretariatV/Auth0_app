import NavBarBrand from "./navBarBrand";
import NavBarButtons from "./navBarButtons";
import NavBarTabs from "./navBarTabs";

function NavBar() {
  return (
    <div className="nav-bar__container">
      <nav className="nav-bar">
        <NavBarBrand />
        <NavBarTabs />
        <NavBarButtons />
      </nav>
    </div>
  );
}

export default NavBar;
