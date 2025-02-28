const JobCardSkeleton: React.FC = () => {
  return (
    <div className="border p-4 rounded-lg shadow animate-pulse">
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
      <div className="h-8 bg-gray-300 rounded w-full"></div>
      <div className="h-4 bg-gray-300 rounded w-1/3 mt-2"></div>
    </div>
  );
};

export default JobCardSkeleton;
