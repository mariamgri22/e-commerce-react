import React from 'react'
import ProductItem from '../ProductItem/ProductItem'

export default function ProductContainer({products,dispatch}) {
  return (
    <div className='grid'>{products.map(product=>
    <ProductItem
     dispatch={dispatch}
     key={product.id}
      {...product} 
      withImage/>)}</div>
  )
}
