import React,{useContext} from 'react'
import { Shopcontext } from '../context/Shopcontext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../components/Breadcrums/Breadcrums';
import Productdispaly from '../components/Productdisplay/Productdispaly';
import Description from '../components/Descriptionbox/Description';
import Relatedproduct from '../components/Relatedproduct/Relatedproduct';
const Product = () => {
  const {all_product}= useContext(Shopcontext);
  const {productid}= useParams();
  const product = all_product.find((e)=>e.id === Number(productid));
  return (
    <div >
       <Breadcrums product={product} />
       <Productdispaly  product={product}/>
       <Description/>
       <Relatedproduct/>
    </div>
  )
}

export default Product
