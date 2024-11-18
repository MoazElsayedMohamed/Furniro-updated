import { SvgIcon } from "../svgIcon/SvgIcon";

interface Props {
  name: string;
}

const ProductIcon: React.FC<Props> = ({ name }) => {
  return (
    <div className="flex gap-1 items-center">
      <SvgIcon name={name} className="w-6 h-5 max-md:w-4 max-md:h-4" />
      <p className="capitalize font-semibold max-md:text-sm">{name}</p>
    </div>
  );
};

export default ProductIcon;
