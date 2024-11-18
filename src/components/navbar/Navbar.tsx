import NavTag from "./NavTag";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex list-none items-center gap-14 cursor-pointer max-md:hidden relative ">
        <NavTag name="Home" route="/" />
        <NavTag name="Shop" route="/shop" />
        <NavTag name="About" route="#" />
        <NavTag name="Contact" route="/contact" />
      </ul>
    </nav>
  );
};

export default Navbar;
