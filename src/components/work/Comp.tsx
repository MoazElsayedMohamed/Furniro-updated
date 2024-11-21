import React from "react";
import { SvgIcon } from "../svgIcon/SvgIcon";

interface CompProps {
  name: string;
  workName: string;
  desc: string;
}

const Comp: React.FC<CompProps> = ({ name, workName, desc }) => {
  return (
    <div className="flex gap-1 items-center">
      <SvgIcon
        name={name}
        className="h-12 w-14 text-ghost max-md:h-10 max-md:w-12"
      />
      <div>
        <h1 className="text-2xl font-semibold text-ghost max-md:text-lg">
          {workName}
        </h1>
        <p className="text-gray-400 text-xl max-md:text-base">{desc}</p>
      </div>
    </div>
  );
};

export default Comp;
