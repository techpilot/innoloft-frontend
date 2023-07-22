import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSWR from 'swr';
import { API_URL } from '../../constants/api';
import { setEditedProducts } from '../../store/reducers/main_reducer';

const EditDetails = ({ product }) => {
  const dispatch = useDispatch();
  const [trlValue, setTrlValue] = useState();
  const [categories, setCategories] = useState();
  const [bizModel, setBizModel] = useState();
  const editedProduct = useSelector((state) => state.main.editedProduct);

  const { data: trls } = useSWR(`${API_URL}/trl/`);

  const handleTrl = (inputString) => {
    const numberRegex = /\d+/g;
    const numbers = inputString.match(numberRegex);

    setTrlValue({
      id: numbers[0],
      name: inputString,
    });
  };

  const handleValues = () => {
    dispatch(
      setEditedProducts({
        ...editedProduct,
        trlValue: trlValue,
        ...editedProduct,
        categories: [{ id: '23', name: categories }],
        ...editedProduct,
        businessModels: [{ id: '23', name: bizModel }],
      })
    );
  };

  useEffect(() => {
    const numberRegexpr = /\d+/g;
    const defaultTrlId = product?.trl?.name?.match(numberRegexpr);
    setTrlValue({
      ...trlValue,
      id: defaultTrlId,
      ...trlValue,
      name: product?.trl?.name,
    });
  }, [product?.trl?.name]);

  return (
    <div className="bg-white rounded-lg w-[100%] border xl:w-[67%] mb-5 p-3">
      <div className="flex flex-col">
        <p className="text-lg font-semibold text-[#374151] mb-2">Details</p>
        <div className="mb-5">
          <p className="font-semibold text-[#6b7280] mb-1">Categories</p>
          <input
            onChange={(e) => setCategories(e.target.value)}
            placeholder="Add categories"
            className="w-full bg-white rounded-md border p-2 outline-none mr-2"
          />
        </div>

        <div className="mb-5">
          <p className="font-semibold text-[#6b7280] mb-1">Business Models</p>
          <input
            onChange={(e) => setBizModel(e.target.value)}
            placeholder="Add business models"
            className="w-full bg-white rounded-md border p-2 outline-none mr-2"
          />
        </div>

        <div className="mb-5">
          <p className="font-semibold text-[#6b7280] mb-1">TRl</p>
          <select
            name="TRl"
            id="trl"
            onChange={(e) => handleTrl(e.target.value)}
            className="outline-none w-full p-2 rounded-md text text-[#374151] bg-white border"
          >
            <option id={product?.trl?.id} value={product?.trl?.name}>
              {product?.trl?.name}
            </option>
            {trls?.map((trl) => (
              <option key={trl?.id} value={trl?.name}>
                {trl?.name}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleValues}
          className={`bg-[#272E71] py-1 px-4 text-white font-semibold rounded-md outline-none border-none ml-auto`}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditDetails;
