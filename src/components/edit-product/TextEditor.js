import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import { useDispatch, useSelector } from 'react-redux';
import { setEditedProducts } from '../../store/reducers/main_reducer';

const TextEditor = ({ product }) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState(
    removeUnwantedStr(product?.description)
  );
  const editedProduct = useSelector((state) => state.main.editedProduct);

  function removeUnwantedStr(str) {
    let description = str?.replace(/<[^>]*>/g, '');
    return description?.replace(/console\.log\([^)]*\);?/g, '');
  }

  const handleChange = (value) => {
    setContent(value);
  };

  const onCancel = () => {
    const setInput = removeUnwantedStr(product?.description);
    setContent(setInput);
  };

  const onSetDescContent = () => {
    dispatch(setEditedProducts({ ...editedProduct, description: content }));
  };

  useEffect(() => {
    const setInput = removeUnwantedStr(product?.description);
    setContent(setInput);
  }, [product?.description]);

  return (
    <div className="flex flex-col mx-3">
      <ReactQuill
        value={content}
        onChange={handleChange}
        modules={{
          toolbar: [
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            ['clean'],
          ],
        }}
        formats={[
          'header',
          'bold',
          'italic',
          'underline',
          'strike',
          'blockquote',
          'list',
          'bullet',
          'link',
          'image',
        ]}
        placeholder="Start typing..."
        style={{
          border: '1px dotted #D3D3D3',
          color: '#6B7280',
        }}
      />
      <div className="ml-auto flex items-center m-2 gap-1">
        <button
          onClick={onCancel}
          className="bg-white py-1 px-4 text-[#272E71] font-semibold rounded-md outline-none border-none"
        >
          Cancel
        </button>
        <button
          onClick={onSetDescContent}
          className="bg-[#272E71] py-1 px-4 text-white font-semibold rounded-md outline-none border-none"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default TextEditor;
