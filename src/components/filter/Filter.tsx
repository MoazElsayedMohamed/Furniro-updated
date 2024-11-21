import FilterPart from "./FilterPart";
import SortingPart from "./SortingPart";

export interface FilterProps {
  totalProducts: number | undefined;
  currentPage: number;
  pageSize: number;
  setPageSize?: React.Dispatch<React.SetStateAction<number>> | undefined;
}

const Filter: React.FC<FilterProps> = ({
  totalProducts,
  currentPage,
  pageSize,
  setPageSize,
}) => {
  return (
    <section className="bg-secondary md:px-24 max-md:px-12  py-7 max-sm:px-8 max-xs:px-2 ">
      <div className="grid lg:grid-cols-2 max-lg:justify-center max-lg:gap-4 ">
        <FilterPart
          totalProducts={totalProducts}
          currentPage={currentPage}
          pageSize={pageSize}
        />
        <SortingPart
          setPageSize={setPageSize}
          totalProducts={undefined}
          currentPage={0}
          pageSize={0}
        />
      </div>
    </section>
  );
};

export default Filter;
