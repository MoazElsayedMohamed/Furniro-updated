import { Link } from "react-router-dom";
import { SvgIcon } from "../svgIcon/SvgIcon";
import React from "react";

interface IconProps {
  name: string;
  route: string;
}
const Icon: React.FC<IconProps> = ({ name, route }) => {
  return (
    <Link to={route}>
      <SvgIcon name={name} className="w-6 h-5" />
    </Link>
  );
};

export default Icon;
