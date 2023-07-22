import { Skeleton } from '@mui/material';

const MapSkeleton = () => {
  return (
    <div className="w-full">
      <Skeleton variant="rectangular" height={100} width={150} />
    </div>
  );
};

export default MapSkeleton;
