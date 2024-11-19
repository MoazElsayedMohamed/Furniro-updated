import { Skeleton } from "../ui/skeleton";

const Loader = () => {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-24 w-24 bg-gray-500 rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-64 bg-gray-500" />
        <Skeleton className="h-4 w-52 bg-gray-500" />
      </div>
    </div>
  );
};

export default Loader;
