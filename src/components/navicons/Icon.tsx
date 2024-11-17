import { Link } from "react-router-dom";
import { SvgIcon } from "../svgIcon/SvgIcon";

interface IconProps {
  name: string;
  route: string;
  openMenu?: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
const Icon: React.FC<IconProps> = ({ name, openMenu, route, setOpenMenu }) => {
  return (
    <Link
      to={route}
      onClick={() => setOpenMenu(false)}
      className={`w-full flex justify-center pb-2 ${
        openMenu && "border-b border-gray-200"
      }`}
    >
      <SvgIcon name={name} className="w-6 h-5" />
    </Link>
  );
};

export default Icon;
