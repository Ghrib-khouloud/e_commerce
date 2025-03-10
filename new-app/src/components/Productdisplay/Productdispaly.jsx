import React, { useContext } from 'react'
import './Productdisplay.css'
import star_icon from "../assets/star_icon.png"
import star_dull_icon from '../assets/star_dull_icon.png'
import { Shopcontext } from '../../context/Shopcontext'
const Productdispaly = (props) => {
    const {product}=props;
    const {addtocart}=useContext(Shopcontext);
  return (
    <div className='productdisplay'>
       <div className="productdisplay-left">
       <div className="productdisplay-img-list">
        <img src={product.image} alt="" /><img src={product.image} alt="" /><img src={product.image} alt="" /><img src={product.image} alt="" />
       </div>
       <div className="productdisplay-img">
        <img className='productdisplay-main-image' src={product.image} alt="" />
       </div>
       </div>
       <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdispalt-right-star">
            <img src={star_icon} alt="" /><img src={star_icon} alt="" /><img src={star_icon} alt="" /><img src={star_icon} alt="" /><img src={star_dull_icon} alt="" />
             <p>(122)</p>
        </div>
        <div className="product-display-right-prices">
            <div className="product-display-right-price-old">
                ${product.old_price}
            </div>
            <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere asperiores modi possimus laboriosam sint, ratione repudiandae eligendi beatae inventore aut facilis corrupti repellat doloremque, necessitatibus unde nam expedita. Deserunt, maiores.
            </div>
            <div className="product-display-right-size">
                <h1>Selectc Size</h1>
                <div className="product-display-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
 <button onClick={()=>{addtocart(product.id)}}>ADD TO CART</button>
 <p className="productdisplay-right-category">
    <span>Category :
    </span>Women,T-shirt,Crop Top
 </p>
 <p className="productdisplay-right-category">
    <span>Tags :
    </span>Modern,latest
 </p>
        </div>
       </div>
   
  )
}

export default Productdispaly
