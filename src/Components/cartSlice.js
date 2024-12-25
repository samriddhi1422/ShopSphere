import {createSlice} from '@reduxjs/toolkit';

const initialState ={
    items:[],
    totalQuantity:0,
    totalPrice:0,
}
const localStorageData =()=>{
    const savedCart = localStorage.getItem('cart')
    return savedCart? JSON.parse(savedCart):initialState;
}
const cartSlice = createSlice({
    name:'cart',
    initialState : localStorageData(),
    reducers:{
        addItem:(state,action)=>{
            const newItem =action.payload;
            const existingItem =state.items.find(item=>item.id==newItem.id);
            if(existingItem){
                existingItem.quantity+=1;
                existingItem.totalPrice+=newItem.price*newItem.quantity;
            }
            else{
                state.items.push({
                    ...newItem,                                             
                    totalPrice:newItem.price*newItem.quantity })
            }
           state.totalPrice+=newItem.price*newItem.quantity
           state.totalQuantity+=newItem.quantity
           localStorage.setItem('cart', JSON.stringify(state));
        },
        deleteItem:(state,action)=>{
            const id = action.payload;
          const existingItem = state.items.find(item=>item.id===id);
          if(existingItem){
            state.totalQuantity-=existingItem.quantity;
            state.totalPrice-=existingItem.totalPrice;
            state.items = state.items.filter(item => item.id !== id);
          }
          localStorage.setItem('cart', JSON.stringify(state));

        },
        updateQuantity(state, action) {
            const { id, quantity } = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem) {
              existingItem.quantity = quantity;
              existingItem.totalPrice = existingItem.price * quantity;
            }
            state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
            state.totalPrice = state.items.reduce((total, item) => total + item.totalPrice, 0);
            localStorage.setItem('cart', JSON.stringify(state));
          },
          clearCart(state){
            state.items=[]
            state.totalQuantity=0
            state.totalPrice=0
            localStorage.removeItem('cart')
          }
        
    }
})

export const {addItem,deleteItem,updateQuantity,clearCart}= cartSlice.actions;
export default cartSlice.reducer;

