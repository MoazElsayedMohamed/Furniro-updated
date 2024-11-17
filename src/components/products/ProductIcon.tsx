import { SvgIcon } from "../svgIcon/SvgIcon";

interface Props {
  name: string;
}

const ProductIcon: React.FC<Props> = ({ name }) => {
  return (
    <div className="flex gap-1 items-center">
      <SvgIcon name={name} className="w-6 h-5" />
      <p className="capitalize font-semibold">{name}</p>
    </div>
  );
};

export default ProductIcon;
