import React, { useContext } from 'react';
import './Cartitems.css';
import { Shopcontext } from '../../context/Shopcontext';
import remove_icon from '../assets/cart_cross_icon.png';

const Cartitems = () => {
    const { getTotalCartAmount, all_product, cartItems, removefromcart } = useContext(Shopcontext);

    return (
        <div className='cartitems'>
            <div className="cartsitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartsitems-format-main">
                                <img src={e.image} alt="" className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => removefromcart(e.id)} alt="Remove" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
              <div className="cartitems-total">
                <h1>cart Totals</h1>
                <div>
                  <div className="cart-items-total-item">
                    <p>Subtatal</p>
                    <p>${ getTotalCartAmount()}</p>
                  </div>
                  <hr />
                  <div className="cart-items-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                  </div>
                  <hr />
                  <div className="cart-items-total-item">
                    <h3>Total</h3>
                    <h3>${ getTotalCartAmount()}</h3>
                  </div>
                </div>
                <button>Proceed to checkout</button>
              </div>
              <div className="cartitems-promocode">
                <p>If you have promo code ,Enter it here</p>
                <div className="cartitems-promobox">
                  <input type="text" placeholder='promo code'/>
                  <button>Submit</button>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Cartitems;
