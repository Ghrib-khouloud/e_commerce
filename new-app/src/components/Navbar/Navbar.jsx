import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { Shopcontext } from '../../context/Shopcontext'
const Navbar = () => {
    const [menu,setmenu]=useState("shop");
    const {gettotalcartitems} =useContext(Shopcontext);
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt=""/>
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>setmenu("shop")}><Link style={{textDecoration:'none'}}to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>setmenu("men")}><Link style={{textDecoration:'none'}}to='/men'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
        <li onClick={()=>setmenu("women")}><Link style={{textDecoration:'none'}}to='/women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
        <li onClick={()=>setmenu("kids")}><Link style={{textDecoration:'none'}}to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
       <Link to='/login'> <button>Login</button></Link>
       <Link to='/cart'><img src={cart_icon} alt=''/></Link>
        <div className="nav-cart-count">{gettotalcartitems()}</div>
      </div>
    </div>
  )
}

export default Navbar
