import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import AuthenticationGuard from "./components/authenticationGuard";
import PageLoader from "./components/pageLoader";
import HomePage from "./pages/homePage";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route
        path="/profile"
        element={<AuthenticationGuard component={ProfilePage} />}
      /> */}
    </Routes>
  );
}

export default App;
