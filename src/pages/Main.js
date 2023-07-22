import { useSelector } from 'react-redux';
import ProductSkeleton from '../components/utils/skeletons/ProductSkeleton';

const Main = () => {
  const product = useSelector((state) => state.main.product);

  return (
    <div className="py-20 md:py-5 px-5 md:px-[6rem] xl:px-[15rem]">
      {product && (
        <div className="flex flex-col items-center">
          <div className="max-h-[28rem] max-w-[50rem]">
            <img
              src={product?.picture}
              alt="Innoloft"
              className="object-cover"
            />
          </div>
          <p className="text-2xl font-semibold text-[#272e71] mt-28">
            Welcome to Innoloft
          </p>
        </div>
      )}
      {product === undefined && <ProductSkeleton />}
    </div>
  );
};

export default Main;
