
import atc from '../assets/image 2.png'
import logo from '../assets/ShopSphere.png'
import './header.css'
import { FaBars } from 'react-icons/fa';
import { IoIosClose } from "react-icons/io";
import { useState } from 'react';
import { NavLink } from "react-router-dom";

function Header(){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    return(
        <>
        <div className="nav">
           
            <div className="logo">
                <img src={logo}></img>
            </div>
             <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
              <ul type='none'>
                
                 <li>
                <NavLink to="/"style={{ textDecoration: 'none', color:'rgba(253, 241, 245, 1)'}}>Home</NavLink></li>

                  
                <li>
                  <NavLink to="/products" style={{ textDecoration: 'none',color:'rgba(253, 241, 245, 1)'}}>Product</NavLink>
                </li>
                <li>
                  <NavLink to="/" style={{ textDecoration: 'none',color:'rgba(253, 241, 245, 1)'}}>Know us</NavLink>
                </li>
                <li><NavLink to="/addtocart"><img src={ atc}></img></NavLink></li>
              </ul>

            </div>
            <div className="mobile-view">
        <button onClick={toggleMenu} className="mobile-view-Icon">
          {isMenuOpen ? <IoIosClose size={30} /> : <FaBars size={30} />}
        </button>
      </div>
        </div>
        </>
    )
}

export default Header;