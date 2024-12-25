import { useEffect, useState } from 'react';
import './products.css'
import { VscLoading } from "react-icons/vsc";
import si from '../assets/image 1 (1).png'
import { useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';



function Products(){

  const [data,setData] =  useState([]);
  const[categories,setCategories]=useState([])
  const [category,setCategory] = useState("all")
  const[search,setSearch] = useState('')
  const[noResultFound,setNoResultFound] = useState(false)
  const[sort,setSort] = useState("low-to-high")
  const [allProducts,setAllProducts] =useState([])
  
  
 
   
  async function fetchProducts(category) {
    let url ='https://dummyjson.com/products';
    if (category !== 'all') {
       url = `https://dummyjson.com/products/category/${category}`; // Category-specific API
    }
   const response = await fetch(url);
   const result =  await response.json();
  
   
  setData(result.products);
  setAllProducts(result.products);
        
  }

  async function fetchCategory() {
  
    const ur ='https://dummyjson.com/products/category-list'
    const res=await fetch(ur);
    const data =await res.json();
  
    setCategories(data)
  }
  


  useEffect(() => {
    fetchCategory(); // Fetch categories
  }, []); // Run only once when the component mounts

  useEffect(() => {
    fetchProducts(category); // Fetch products based on the selected category
  }, [category]); // Re-fetch products when category changes

 const handleCategoryChange=(event)=>{
   setCategory(event.target.value);
}

    
const handleSearch = (event) => {
  const query = event.target.value.toLowerCase();
  setSearch(query);
  const filtered = allProducts.filter((product) =>
    product.title.toLowerCase().includes(query) ||
    product.category.toLowerCase().includes(query)
  );
  setData(filtered);
  if(filtered.length==0){
      setNoResultFound(true)
    }
    else{
      setNoResultFound(false)
    }
};
    
  const handleSort=(event)=>{
    setSort(event.target.value)
  }

  useEffect(()=>{
    if(sort){
      const sortedProducts =[...data];
      if(sort=="high-to-low"){
        sortedProducts.sort((a,b)=> b.price-a.price)
      }
      else if(sort=="low-to-high"){
        sortedProducts.sort((a,b)=>a.price-b.price)
      }
      setData(sortedProducts)
    }

  },[sort])
    
  const navigate = useNavigate();
  const handleViewDetails =(id)=>{
    navigate(`/${id}`);
    
  }

  const cart =useSelector((state=>state.cart));
  const dispatch = useDispatch();

  
   return(
  <div className='pp'>
  <div className='op'>
 <div className="product-list">
    
      <select value={category} onChange={handleCategoryChange}>
        <option value="all">All Products</option>
        {categories.length > 0 ? (
          categories.map((cat, index) => (
            <option key={index} value={cat}>{cat.replace('-', ' ')}</option>
            
          ))
        ) : (
          <option disabled>Loading categories...</option>
        )}
      </select>

 </div>
 <div className='sort' value={sort} onChange={handleSort}>
  <select>
    <option value="low-to-high">Low to High</option>
    <option value="high-to-low">High to low</option>
  </select>
 </div>
 <div className='sr'>
 <img src={ si}></img>
   <input placeholder='Search in the Category' value={search} onChange={handleSearch}></input>
</div>
 </div>
   <div className="products">
   {noResultFound ? (
          <div className="no-results">
            <p>No products found matching your search</p>
          </div>
        ):
      data.length > 0 ? (
        data.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} />
            <h6>{product.title}</h6>
            <div className='pc-2'> 
            <p>Price: ${product.price}</p>
            <p>Stock: {product.stock}</p>
            <button onClick={()=>handleViewDetails(product.id)}>View Details</button>
            {/* <button onClick={()=>handleAddToCart(product)}>Add to Cart</button> */}
          </div>
          </div>
        ))
      ) : (
        <div className='load'>
          <div><VscLoading  size={100}/></div>
          <h5>Loading...</h5></div>
      )}
    </div>
  
  </div>
    )}

    export default Products;