import React, { createContext, useState } from 'react'
import all_product from '..//components/assets/all_product'
export const  Shopcontext = createContext(null);
const getdefaultcart =()=>{
    let cart ={};
    for (let index = 0; index < all_product.length; index++) {
        cart[index]=0;

        
    }
    return cart;
}
const Shopcontextprovider =(props)=>{
const [cartItems,setCartitems]=useState(getdefaultcart());

const addtocart=(itemid)=>{
setCartitems((prev)=>({...prev,[itemid]:prev[itemid]+1}));
}
const removefromcart=(itemid)=>{
    setCartitems((prev)=>({...prev,[itemid]:prev[itemid]-1}));
    }
const getTotalCartAmount = ()=>{
    let totalamount = 0;
    for(const item  in cartItems){
        if (cartItems[item]>0){
            let iteminfo = all_product.find((product)=>product.id ===Number(item))
            totalamount += iteminfo.new_price*cartItems[item]
        }
       
    }
    return totalamount
}
const gettotalcartitems=()=>{
    let totalitems =0;
    for(const item  in  cartItems){
        if (cartItems[item] >0){
            totalitems += cartItems[item]
        }
    }
    return totalitems
}
    const contextvalue={gettotalcartitems, getTotalCartAmount,all_product,cartItems,addtocart,removefromcart};
    console.log(cartItems);
return(
    <Shopcontext.Provider value={contextvalue}>
        {props.children}
    </Shopcontext.Provider>
)

}
export default Shopcontextprovider
