import { Skeleton } from '@mui/material';

const ProductSkeleton = () => {
  return (
    <div className="flex w-full gap-5">
      <div className="flex w-[15rem]">
        <Skeleton variant="rectangular" height={250} width={500} />
      </div>
      <div className="flex-1">
        <Skeleton variant="rectangular" height={500} />
      </div>
    </div>
  );
};

export default ProductSkeleton;
