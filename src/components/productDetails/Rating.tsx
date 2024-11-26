import React from "react";
import { SvgIcon } from "../svgIcon/SvgIcon";

interface RatingProps {
  numberOfStars: number | undefined;
}

const Rating: React.FC<RatingProps> = ({ numberOfStars }) => {
  const stars = Array(numberOfStars).fill(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return stars.map((__) => {
    return <SvgIcon name="star" className="w-5 h-5" />;
  });
};

export default Rating;
