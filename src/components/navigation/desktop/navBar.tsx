import NavBarBrand from "./navBarBrand";
import NavBarTabs from "./navBarTabs";

function NavBar() {
  return (
    <div className="nav-bar__container">
      <nav className="nav-bar">
        <NavBarBrand />
        <NavBarTabs />
      </nav>
    </div>
  );
}

export default NavBar;
