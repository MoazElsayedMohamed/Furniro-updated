const Colors = () => {
  return (
    <>
      <h1 className="capitalize text-gray-200 font-normal max-sm:text-sm">
        color
      </h1>
      <div className="flex items-center gap-3">
        <div className="bg-violet-400 rounded-full w-7 h-7 cursor-pointer max-sm:h-6 max-sm:w-6"></div>
        <div className="bg-black rounded-full w-7 h-7 cursor-pointer max-sm:h-6 max-sm:w-6"></div>
        <div className="bg-primary rounded-full w-7 h-7 cursor-pointer max-sm:h-6 max-sm:w-6"></div>
      </div>
    </>
  );
};

export default Colors;
