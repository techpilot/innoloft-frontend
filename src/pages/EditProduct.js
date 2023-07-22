import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditDetails from '../components/edit-product/EditDetails';
import EditMain from '../components/edit-product/EditMain';
import EditVideo from '../components/edit-product/EditVideo';
import SideProfile from '../components/product/SideProfile';
import ProductSkeleton from '../components/utils/skeletons/ProductSkeleton';
import { API_URL } from '../constants/api';
import { setEditedProducts } from '../store/reducers/main_reducer';

const EditProduct = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.main.product);
  const editedProduct = useSelector((state) => state.main.editedProduct);

  const handleSubmit = async () => {
    try {
      const response = await axios.put(
        `${API_URL}/product/6781/`,
        editedProduct,
        {
          'Content-Type': 'multipart/form-data',
          headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Methods': 'PUT',
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  useEffect(() => {
    dispatch(setEditedProducts({ ...editedProduct, name: product?.name }));
  }, [product, dispatch]);

  return (
    <div className="flex justify-between py-5 px-3 lg:px-[3rem] xl:px-[8rem] lg:gap-5">
      {product && <SideProfile product={product} />}

      {product && (
        <div className="flex-1 flex flex-col gap-5 lg:ml-3">
          <EditMain product={product} />
          <EditVideo />
          <EditDetails product={product} />

          <button
            onClick={handleSubmit}
            className="bg-[#272E71] py-3 px-4 text-white font-semibold rounded-md outline-none border-none mb-5"
          >
            Submit
          </button>
        </div>
      )}
      {product === undefined && <ProductSkeleton />}
    </div>
  );
};

export default EditProduct;
