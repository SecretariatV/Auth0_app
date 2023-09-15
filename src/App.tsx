import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import PageLoader from "./components/pageLoader";
import HomePage from "./pages/homePage";
import CallbackPage from "./pages/callbackPage";
import NotFoundPage from "./pages/notFoundPage";
import AuthenticationGuard from "./components/authenticationGuard";
import ProfilePage from "./pages/profilePage";

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
      <Route
        path="/profile"
        element={<AuthenticationGuard component={ProfilePage} />}
      />
      <Route path="/callback" element={<CallbackPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
