import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Work from "./components/work/Work";
import { CartProvider } from "./components/productDetails/useCart";
import { Suspense } from "react";

const AppLayout = () => {
  const location = useLocation();
  const isLogin = location.pathname === "/login";

  return (
    <Suspense>
      <CartProvider>
        <Header />
        <Outlet />
      </CartProvider>
      {(location.pathname === "/shop" ||
        location.pathname === "/cart" ||
        location.pathname === "/checkout") && <Work />}
      {!isLogin && <Footer />}
    </Suspense>
  );
};

export default AppLayout;
