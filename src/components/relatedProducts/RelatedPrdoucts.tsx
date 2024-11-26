import ProductElements from "../products/ProductElements";

const RelatedPrdoucts = () => {
  return (
    <div className="pt-14 pb-28">
      <p className="capitalize text-4xl text-center mb-6 max-md:text-3xl max-sm:text-2xl">
        related products
      </p>
      <div className="container">
        <ProductElements pageSize={4} currentPage={1} />
      </div>
    </div>
  );
};

export default RelatedPrdoucts;
