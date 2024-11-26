import { Button } from "../ui/button";

const Size = () => {
  return (
    <>
      <h1 className="capitalize text-gray-200 font-normal max-sm:text-sm">
        size
      </h1>
      <div className="flex items-center gap-3">
        <Button variant="third">L</Button>
        <Button variant="third">XL</Button>
        <Button variant="third">XS</Button>
      </div>
    </>
  );
};

export default Size;
