import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  open: false,
  productsCart: JSON.parse(localStorage.getItem('products')) || [],
  subtotal: 0,
  envio: null,
  total: 0,
  isOpenModal: false,
  actualModal: null,
  successCard: false,
  infoSuccess: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      //a variable let, no le puedo agregar nuevas keys
      let newProduct = action.payload
      newProduct = {...newProduct, quantity: 1}
      state.productsCart = [...state.productsCart, newProduct]; 
    },
    incrementQuantity: (state, action) => {
        state.productsCart = state.productsCart.map((product) => product.id == action.payload
        ? { ...product, quantity: product.quantity + 1 }
        : product)
    },
    updateEnvio: (state, action) => {
        state.envio = action.payload
    },
    updateSubtotal: (state, action) => {
      state.subtotal = action.payload
    },
    updateTotal: (state) => {
      state.total = state.envio + state.subtotal
    },
    decrementQuantity: (state, action) => {
        if(state.productsCart.find((product) => product.id == action.payload && product.quantity == 1)){
            // if(window.confirm('Estas seguro que quieres eliminar este producto?')){
            //   state.productsCart.map((product) => product.id == action.payload && product.quantity == 1
            //   ? {...product, quantity: product.quantity - 1 }
            //   : product)
            //   state.productsCart = state.productsCart.filter((product) => product.id !== action.payload)
            return
        } else {
            state.productsCart = state.productsCart.map((product) => product.id == action.payload && product.quantity > 1
            ? {...product, quantity: product.quantity - 1 }
            : product)
        }
    },
    removeProduct: (state, action) => {
        const { id, talle } = action.payload
        console.log(id, talle)
        state.productsCart = state.productsCart.filter((product) => product.id !== id || product.talles !== talle); 
      },
    removeAllProducts: (state) => {
      state.productsCart = [];
    },
    payProduct: (state) => {
      state.productsCart = [];
    },
    closeCart: (state) => {
      state.open = false; 
    },
    openCart: (state) => {
      state.open = true; 
    },
    confirmBuy: (state) => {
      state.productsCart = []
    },
    openModal: (state) => {
      state.isOpenModal = true
    },
    updateModal: (state, action) => {
      state.actualModal = action.payload
    },
    closeModal: (state) => {
      state.isOpenModal = false
    },
    openSuccess:(state) => {
      state.successCard = true
 
    },
    closeSuccess:(state) => {
      state.successCard = false
    },
    updateSuccess: (state, action) => {
      state.infoSuccess = action.payload
    }
  },
});




export const { updateSuccess, addLocalStorage, openSuccess, closeSuccess, updateModal,openModal, closeModal, updateTotal,updateSubtotal, updateEnvio, decrementQuantity, incrementQuantity, addProduct, removeProduct, removeAllProducts, payProduct, closeCart, openCart, confirmBuy } = cartSlice.actions;


export default cartSlice.reducer;
