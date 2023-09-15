import { ReactNode } from "react";
import NavBar from "../components/navigation/desktop/navBar";
import MobileNavBar from "../components/navigation/mobile/mobileNavBar";
import PageFooter from "../components/pageFooter";

function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="page-layout">
      <NavBar />
      <MobileNavBar />
      <div className="page-layout__content">{children}</div>
      <PageFooter />
    </div>
  );
}

export default PageLayout;
