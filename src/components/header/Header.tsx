import { useEffect, useState } from "react";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import Navicons from "../navicons/Navicons";
import { Link } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
      setOpenMenu(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`h-24 bg-white w-full flex items-center justify-around z-50 max-md:justify-between max-md:pl-5  ${
        scrolled ? "fixed shadow-md" : "relative"
      } `}
    >
      <div className="flex items-center gap-1 ">
        <Logo />
        <Link className="text-3xl font-bold" to="/">
          Furniro
        </Link>
      </div>
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Navicons openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </header>
  );
};

export default Header;
