import Auth0Features from "../components/auth0Features";
import HeroBanner from "../components/HeroBanner";
import PageLayout from "../components/pageLayout";

function HomePage() {
  return (
    <PageLayout>
      <HeroBanner />
      <Auth0Features />
    </PageLayout>
  );
}

export default HomePage;
