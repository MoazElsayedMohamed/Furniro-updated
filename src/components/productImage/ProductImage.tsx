interface ImageProps {
  imageUrl?: string;
}

const ProductImage: React.FC<ImageProps> = ({ imageUrl }) => {
  return (
    <div className="h-full w-full  flex gap-8">
      <div className="flex flex-col gap-2">
        <img
          src="/set1.webp"
          alt="set1 image"
          className="bg-secondary py-3 rounded-xl"
        />
        <img
          src="/set2.webp"
          alt="set2 image"
          className="bg-secondary rounded-xl"
        />
        <img
          src="/set3.webp"
          alt="set3 image"
          className="bg-secondary rounded-xl"
        />
        <img
          src="/set4.webp"
          alt="set4 image"
          className="bg-secondary py-3 rounded-xl"
        />
      </div>
      <img src={imageUrl} className=" h-full rounded-xl w-4/6" />
    </div>
  );
};

export default ProductImage;
