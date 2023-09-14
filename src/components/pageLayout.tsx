import { ReactNode } from "react";
import NavBar from "./navigation/desktop/navBar";

function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="page-layout">
      <NavBar />
    </div>
  );
}

export default PageLayout;
