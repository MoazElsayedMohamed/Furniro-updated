import React from "react";
import { NavLink } from "react-router-dom";

interface LinksProps {
  route: string;
  name: string;
}

const FooterLinks: React.FC<LinksProps> = ({ route, name }) => {
  return (
    <>
      <NavLink
        to={route}
        className=" cursor-pointer capitalize hover:text-primary lg:mb-8 max-lg:mb-5"
      >
        {name}
      </NavLink>
    </>
  );
};

export default FooterLinks;
