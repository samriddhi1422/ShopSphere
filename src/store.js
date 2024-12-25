import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './Components/cartSlice'

const store = configureStore({
    reducer:{
        cart:cartReducer
    }
})
export default store;