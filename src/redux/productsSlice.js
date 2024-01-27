import { createSlice} from "@reduxjs/toolkit";
import { Products } from "../data/Products";

const initialState = {
    currentCategory: '',
    currentProducts: Products.slice(),
}

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        updateCategory: (state, actions) => {
            state.currentCategory = actions.payload
        },
        updateProducts: (state) => {
            const { currentCategory, currentProducts} = state

            if (currentCategory === "male" || currentCategory === "female") {
                state.currentProducts = Products.filter(
                (product) => product.sex === currentCategory
                );
                return
            } else if (currentCategory === "todo") {
                state.currentProducts = Products.slice();
                return
            } else {
                state.currentProducts = Products.filter(
                (product) => product.category === currentCategory
                );
                return

            }
        },
        searchProducts: (state, action) => {
            const { payload } = action;
            
            //TUVE QUE CHATGPETEARLO PERDÓN
            state.currentProducts = Products.filter((product) => {
              switch (payload.toLowerCase()) {
                case product.sex.toLowerCase():
                    return true
                case product.color.toLowerCase():
                    return true

                case product.title.toLowerCase():
                    return true

                case product.category.toLowerCase():
                  return true;
                default:
                  return product.desc.toLowerCase().includes(payload.toLowerCase());
              }
            });
          },
    }
});
  
  
  
  
  export const { searchProducts, updateProducts, updateCategory } = productsSlice.actions;
  export default productsSlice.reducer;
  