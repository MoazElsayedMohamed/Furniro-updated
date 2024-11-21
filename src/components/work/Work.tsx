import Comp from "./Comp";

const Work = () => {
  return (
    <section className="bg-secondary md:py-24 max-md:py-14 grid lg:grid-cols-4 md:grid-cols-2 lg:justify-items-center md:gap-2 max-md:gap-4 pl-4">
      <Comp
        name="quality"
        workName="High Quality"
        desc="crafted from top materials"
      />
      <Comp
        name="protection"
        workName="Warranty Protection"
        desc="Over 2 years"
      />
      <Comp name="shipping" workName="Free Shipping" desc="Order over 150 $" />
      <Comp name="support" workName="24 / 7 Support" desc="Dedicated support" />
    </section>
  );
};

export default Work;
