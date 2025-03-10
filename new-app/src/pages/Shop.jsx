import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/Offers/Offers'
import Newcollectios from '../components/Newcollections/Newcollectios'
import Newsletter from '../components/Newsletter/Newsletter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <Newcollectios/>
      <Newsletter/>
    </div>
  )
}

export default Shop
