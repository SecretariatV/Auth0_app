import { withAuthenticationRequired } from "@auth0/auth0-react";
import PageLoader from "./pageLoader";
import React from "react";

function AuthenticationGuard({
  component,
}: {
  component: React.ComponentType;
}) {
  const WrappedComponent = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className="page-layout">
        <PageLoader />
      </div>
    ),
  });

  return <WrappedComponent />;
}

export default AuthenticationGuard;
