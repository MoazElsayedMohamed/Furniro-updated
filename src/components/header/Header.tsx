import { useEffect, useState } from "react";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";
import Navicons from "../navicons/Navicons";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0); // Trigger the scrolled state at 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`h-24 bg-white w-full flex items-center justify-around z-50 max-md:justify-between max-md:px-5 ${
        scrolled ? "fixed" : ""
      } `}
    >
      <div className="flex items-center gap-1 ">
        <Logo />
        <h2 className="text-3xl font-bold">Furniro</h2>
      </div>
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Navicons openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </header>
  );
};

export default Header;
