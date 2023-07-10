import {
  Navbar,
  Hero,
  About,
  Services,
  Feedback,
  Pricing,
  CheckIn,
  Footer,
  Plan,
} from "./components";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
