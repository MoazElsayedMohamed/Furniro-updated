import { NavLink } from "react-router-dom";

interface NavbarProps {
  name: string;
  route: string;
}

const NavTag: React.FC<NavbarProps> = ({ name, route }) => {
  return (
    <li>
      <NavLink to={route} className="hover:text-primary">
        {name}
      </NavLink>
    </li>
  );
};

export default NavTag;
