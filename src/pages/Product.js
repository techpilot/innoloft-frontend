import { useSelector } from 'react-redux';
import DetailsSection from '../components/product/DetailsSection';
import MainSection from '../components/product/MainSection';
import SideProfile from '../components/product/SideProfile';
import VideoSection from '../components/product/VideoSection';
import FrowardArrowIcon from '../components/utils/icons/FrowardArrowIcon';
import HomeIcon from '../components/utils/icons/HomeIcon';
import ProductSkeleton from '../components/utils/skeletons/ProductSkeleton';

const Product = () => {
  const product = useSelector((state) => state.main.product);

  return (
    <div className="flex justify-between py-5 px-3 lg:px-[3rem] xl:px-[8rem] lg:gap-5">
      {product && <SideProfile product={product} />}

      <div className="flex-1 flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <HomeIcon />
          <FrowardArrowIcon />
          <p className="text-lg text-[#6B7280] font-semibold">
            {product?.name}
          </p>
        </div>

        {product && <MainSection product={product} />}
        {product && <VideoSection video={product?.video} />}
        {product && <DetailsSection product={product} />}
        {product === undefined && <ProductSkeleton />}
      </div>
    </div>
  );
};

export default Product;
