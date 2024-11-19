const Hero = () => {
  return (
    <div className="relative bg-custom-image md:h-screen bg-cover bg-center bg-no-repeat mt-24 max-md:py-8 max-sm:mt-20">
      <div className="md:absolute md:top-0 md:start-0 w-full h-full flex items-center justify-end lg:px-10 2xl:px-20 max-lg:px-10 max-md:px-5 max-md:justify-center">
        <div className=" bg-secondary md:w-1/2 xl:w-3/5 max-md:w-full p-6 md:p-10 rounded-xl 2xl:w-1/3">
          <h3 className="capitalize font-semibold tracking-widest text-gray-600 max-md:text-sm">
            new arrival
          </h3>
          <h2 className="uppercase text-5xl text-primary my-8 font-bold md:w-5/6 max-md:text-4xl max-md:w-1/2 max-xs:text-3xl max-xs:w-3/4">
            Discover Our New Collection
          </h2>
          <p className="text-lg mb-8 text-gray-600 max-md:text-sm max-md:w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="font-bold uppercase bg-primary py-6 px-20 text-white max-md:py-3 max-md:px-10 max-md:text-sm outline-none">
            buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
