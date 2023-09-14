import { ReactNode } from "react";
import NavBar from "./navigation/desktop/navBar";
import MobileNavBar from "./navigation/mobile/mobileNavBar";

function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="page-layout">
      <NavBar />
      <MobileNavBar />
      <div className="page-layout__content">{children}</div>
    </div>
  );
}

export default PageLayout;
