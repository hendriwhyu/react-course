import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    entities: [],
    entity: {
      id: '',
      title: '',
      price: '',
      discountPrice: '',
      img: '',
    },
  },
  reducers: {
    productLoading(state){
      if(state.loading == false){
        state.loading = true;
      }
    },
    addProduct(state, action) {
      if(state.loading == true){
        state.loading = false;
        state.entities = action.payload;
      }
    },
    getProductById(state, action){
      state.entity = action.payload
    }
  },
});

export default productSlice.reducer;