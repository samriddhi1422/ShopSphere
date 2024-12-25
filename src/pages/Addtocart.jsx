import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cartImg from '../assets/d438a32e-765a-4d8b-b4a6-520b560971e8.webp'
import './Addtocart.css'
import { deleteItem ,updateQuantity,clearCart} from "../Components/cartSlice";
import { use } from "react";
import { MdDelete } from "react-icons/md";
function Addtocart(){
    const cart= useSelector((state)=>state.cart)
    const dispatch = useDispatch();

    const handleRemove=(id)=>{
        dispatch(deleteItem(id))
    }
  ;
  
    const handleQuantityChange = (id, newQuantity) => {
      if (newQuantity <= 0) return; // Prevent invalid quantities
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    };
  const handleClearCart=()=>{
    dispatch(clearCart())
    alert("Cart has been cleared!");
  }
    return(
        <div className="cart">
        {cart.items.length>0 ?(     
               cart.items.map((item)=>(
            
            <div key={item.id} >
                <div className="cart-item">
                <img src={item.thumbnail}></img>
                <div className="item-detail">
                <p><strong>{item.title}</strong> </p>
                <p>${item.price}</p>
                <p>
                <div>
            <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
          </div>
          
                  
                </p>
                <p>Total Price : ${item.totalPrice}
                </p>
                <button onClick={()=>handleRemove(item.id)}><MdDelete size={25}/></button>
                </div>
                </div>

            

            </div>
        
        ))
        
):(
    <div className="empty">
     {/* <img src={cartImg} ></img> */}
    <p>Your card is Empty</p>
     </div>
)}
  {/* Cart Summary */}
  <div className="cart-summary">
        <h3>Cart Summary</h3>
        <p>Total Items: {cart.totalQuantity}</p>
        <p>Total Price: ${cart.totalPrice}</p>
        <button onClick={handleClearCart}>Clear Cart</button>

      </div>        </div>
    )
}
export default Addtocart;