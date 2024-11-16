const Hero = () => {
  return (
    <div className="relative bg-custom-image h-2-screen bg-cover ">
      <div className="md:absolute md:top-0 md:start-0 w-full h-full flex items-center justify-end px-6 max-lg:px-10 max-md:px-20   ">
        <div className=" bg-secondary lg:w-1/2 xl:w-3/5 p-6 md:p-10 rounded-xl">
          <h3 className="capitalize  font-semibold  ">new arrival</h3>
          <h2 className="uppercase text-5xl text-primary my-8 font-bold max-lg:w-3/4   ">
            Discover Our New Collection
          </h2>
          <p className="text-lg mb-8 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="font-bold uppercase bg-primary py-6 px-20 text-white text-lg ">
            buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
