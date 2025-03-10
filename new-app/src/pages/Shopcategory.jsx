import React, { useContext } from 'react'
import './Css/Shopcategory.css'
import { Shopcontext } from '../context/Shopcontext'
import dropdown_icon from '../components/assets/dropdown_icon.png'
import Item from '../components/Item/Item'

const Shopcategory = (props) => {
  const {all_product}=useContext(Shopcontext)
  return (
    <div className='shop-category'>
      <img  className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-product">
        {
          all_product.map((item,i)=>{
            if(props.category===item.category){
                return  <Item key={i} id={item.id} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
            else{
              return null;
            }
          })
        }
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default Shopcategory
