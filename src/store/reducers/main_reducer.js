import { createSlice } from '@reduxjs/toolkit';

export const mainSlice = createSlice({
  name: 'main',
  initialState: {
    product: null,
    editedProduct: {},
  },

  reducers: {
    setProducts: (state, action) => {
      state.product = action.payload;
    },
    setEditedProducts: (state, action) => {
      state.editedProduct = action.payload;
    },
  },
});

export const { setProducts, setEditedProducts } = mainSlice.actions;

export default mainSlice.reducer;
