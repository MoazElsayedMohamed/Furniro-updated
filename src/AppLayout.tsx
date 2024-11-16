import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import { Suspense } from "react";
import Footer from "./components/footer/Footer";
import Spinner from "./components/spinner/Spinner";

const AppLayout = () => {
  const location = useLocation();
  const isLogin = location.pathname === "/login";

  const Loading = () => {
    return <p>loading...</p>;
  };

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Header />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Outlet />
        {!isLogin && <Footer />}
      </Suspense>
    </div>
  );
};

export default AppLayout;
