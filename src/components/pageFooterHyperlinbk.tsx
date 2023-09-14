import { ReactNode } from "react";

function PageFooterHyperlink({
  children,
  path,
}: {
  children: ReactNode;
  path: string;
}) {
  return (
    <a
      className="page-footer__hyperlink"
      href={path}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default PageFooterHyperlink;
