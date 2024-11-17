import { NavLink } from "react-router-dom";

interface NavbarProps {
  openMenu?: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  route: string;
}

const NavTag: React.FC<NavbarProps> = ({
  name,
  openMenu,
  setOpenMenu,
  route,
}) => {
  return (
    <li
      className={`w-full flex justify-center pb-1 ${
        openMenu && "border-b border-gray-200"
      }`}
    >
      <NavLink
        to={route}
        className="hover:text-primary"
        onClick={() => setOpenMenu(false)}
      >
        {name}
      </NavLink>
    </li>
  );
};

export default NavTag;
