import { useState } from "react";
import MobileMenuToggleButton from "./mobileMenuToggleButton";
import MobileNavBarBrand from "./mobileNavBarBrand";
import MobileNavBarButtons from "./mobileNavBarButtons";
import MobileNavBarTabs from "./mobileNavBarTabs";

const MobileMenuState = {
  CLOSED: "closed",
  OPEN: "open",
};

const MobileMenuIcon = {
  CLOSE: "close",
  MENU: "menu",
};

function MobileNavBar() {
  const [mobileMenuState, setMobileMenuState] = useState(
    MobileMenuState.CLOSED
  );
  const [mobileMenuIcon, setMobileMenuIcon] = useState(MobileMenuIcon.MENU);

  const isMobileMenuOpen = () => {
    return mobileMenuState === MobileMenuState.OPEN;
  };

  const closeMobileMenu = () => {
    document.body.classList.remove("mobile-scroll-lock");
    setMobileMenuState(MobileMenuState.CLOSED);
    setMobileMenuIcon(MobileMenuIcon.MENU);
  };

  const openMobileMenu = () => {
    document.body.classList.add("mobile-scroll-lock");
    setMobileMenuState(MobileMenuState.OPEN);
    setMobileMenuIcon(MobileMenuIcon.CLOSE);
  };

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen()) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  };

  return (
    <div className="mobile-nav-bar__container">
      <nav className="mobile-nav-bar">
        <MobileNavBarBrand handleClick={closeMobileMenu} />
        <MobileMenuToggleButton
          icon={mobileMenuIcon}
          handleClick={toggleMobileMenu}
        />

        {isMobileMenuOpen() && (
          <div className="mobile-nav-bar__menu">
            <MobileNavBarTabs handleClick={closeMobileMenu} />
            <MobileNavBarButtons />
          </div>
        )}
      </nav>
    </div>
  );
}

export default MobileNavBar;
