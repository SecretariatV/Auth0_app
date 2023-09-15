import { withAuthenticationRequired } from "@auth0/auth0-react";
import PageLoader from "./pageLoader";
import React from "react";

interface AuthenticationGuardProps {
  component: React.ComponentType;
}

function AuthenticationGuard({
  component: Component,
}: AuthenticationGuardProps) {
  const WrappedComponent = withAuthenticationRequired(Component, {
    onRedirecting: () => (
      <div className="page-layout">
        <PageLoader />
      </div>
    ),
  });

  return <WrappedComponent />;
}

export default AuthenticationGuard;
