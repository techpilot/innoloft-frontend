import { useDispatch, useSelector } from 'react-redux';
import { setEditedProducts } from '../../store/reducers/main_reducer';

const EditVideo = () => {
  const dispatch = useDispatch();
  const editedProduct = useSelector((state) => state.main.editedProduct);

  return (
    <div className="bg-white rounded-lg w-full xl:w-[67%] mb-5 p-5 border">
      <p className="text-lg font-semibold text-[#374151] mb-2">Video</p>
      <input
        onChange={(e) => {
          dispatch(
            setEditedProducts({ ...editedProduct, video: e.target.value })
          );
        }}
        placeholder="Add a youtube or vimeo link"
        className="w-full bg-white rounded-md border p-2 outline-none mr-2"
      />
    </div>
  );
};

export default EditVideo;
