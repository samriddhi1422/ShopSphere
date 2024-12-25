import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import './SinglePage.css'
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../Components/cartSlice";

function SinglePage(){
    const {id}= useParams();
    const [singleProduct , setSingleProduct] = useState([])
    const [quantity,setQuantity] =useState(1)

    const handleDecreaseQuantity=()=>{
      setQuantity(quantity==0? 0: quantity-1)

    }
    const handleIncreaseQuantity=()=>{
      setQuantity(quantity+1)

    }


    useEffect(()=>{
     
    async function singleProduct() {
        let url =(`https://dummyjson.com/products/${id}`);

        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data)
        console.log(data.description)
        setSingleProduct(data)
    }
    singleProduct();

    },[id])

    const dispatch =useDispatch();
    const cart = useSelector((state)=>state.item)
    const handleAddToCart = (singleProduct) => {
      const productWithQuantity = {
        ...singleProduct,
        quantity,
      };
      dispatch(addItem(productWithQuantity)); // Dispatch the product with the selected quantity
      alert(`${quantity} of ${singleProduct.title} added to cart!`);
    };
    
    return(
        <>
        <div className="single-product">
            <div className="sp-1">
            <div className="img-sec">
            <img src={singleProduct.images} alt={singleProduct.title}></img>
            <div className="qt">
              <button onClick={handleDecreaseQuantity}>-</button> {quantity} <button onClick={handleIncreaseQuantity}>+</button>
            </div>
            <div className="atc2">
              <button onClick={()=>handleAddToCart(singleProduct,quantity)}>Add to cart</button>
            </div>

        </div>
            <div className="data-sec">
            <p>{singleProduct.title}</p>
       <p>{singleProduct.description}</p>
       <p>${singleProduct.price}</p>
       <p>{singleProduct.brand}</p>
       <p>{singleProduct.availabiltyStatus}</p>
       <p>{singleProduct.returnPolicy}</p>
       <p>{singleProduct.warrantyInformation}</p>
       <p>{singleProduct.rating} ratings</p>
       </div>
       </div>
       <div className="review-sec">
       <h3>Customer Reviews</h3>
       <div className="review-sec2">
        {singleProduct.reviews && singleProduct.reviews.length > 0 ? (
          singleProduct.reviews.map((review, index) => (
            <div key={index} className="review-card">
              <p><strong>{review.reviewerName}</strong></p>
              <p>{review.comment}</p>
              <p className="review-rating">Rating: {review.rating} / 5</p>
              <p className="review-date">Date: {new Date(review.date).toLocaleDateString()}</p>
            </div>
           
          ))
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
      </div>
        </div>
      
      
        </>
    )

}
export default SinglePage