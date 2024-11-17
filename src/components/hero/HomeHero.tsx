const Hero = () => {
  return (
    <div className="relative bg-custom-image h-screen bg-cover bg-center bg-no-repeat">
      <div className="md:absolute md:top-0 md:start-0 w-full h-full flex items-center justify-end px-6 max-lg:px-10 max-md:px-5 max-md:justify-center">
        <div className=" bg-secondary md:w-1/2 xl:w-3/5 max-md:w-full p-6 md:p-10 rounded-xl 2xl:w-1/3">
          <h3 className="capitalize font-semibold">new arrival</h3>
          <h2 className="uppercase text-5xl text-primary my-8 font-bold lg:w-3/4 max-xs:text-4xl ">
            Discover Our New Collection
          </h2>
          <p className="text-lg mb-8 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="font-bold uppercase bg-primary py-6 px-20 text-white">
            buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
