import { useState } from "react";
import { SvgIcon } from "../svgIcon/SvgIcon";
import { Link } from "react-router-dom";

const CheckAndHelp = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex justify-between mt-4 font-normal text-gray-600">
      <div
        className="flex items-center gap-2 cursor-pointer max-xs:gap-1 "
        onClick={() => setChecked(!checked)}
      >
        <SvgIcon
          name="Vector"
          className={`w-4 h-4 max-xs:w-3 max-xs:h-3 ${
            checked ? "absolute" : "hidden"
          }`}
        />
        <span className="w-4 h-4 max-xs:w-3 max-xs:h-3 border border-black"></span>
        <span className="max-sm:text-sm max-xs:text-xs">Remember me</span>
      </div>
      <Link to="#" className="max-sm:text-sm max-xs:text-xs">
        Need Help?
      </Link>
    </div>
  );
};

export default CheckAndHelp;
