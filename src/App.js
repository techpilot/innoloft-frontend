import { Route, Routes } from 'react-router-dom';
import useSWR from 'swr';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Header from './components/Header';
import { API_URL } from './constants/api';
import EditProduct from './pages/EditProduct';
import Main from './pages/Main';
import Product from './pages/Product';
import { setProducts } from './store/reducers/main_reducer';

function App() {
  const dispatch = useDispatch();

  const url = `${API_URL}/product/6781/`;
  const { data: product } = useSWR(url);

  useEffect(() => {
    dispatch(setProducts(product));
  }, [product, dispatch]);

  return (
    <div className="bg-[#f9fafb] min-h-[100vh]">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/edit" element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;
