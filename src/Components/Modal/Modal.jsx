import React from 'react'
import useOutSideClick from '../../hooks/useOutSideClick'
import ProductItem from '../ProductItem/ProductItem'
import {useRef,useMemo} from 'react';
import {ACTION_TYPES} from '../../App'

export default function Modal({products,dispatch}) {
    const ref=useRef(null);
    
   useOutSideClick(ref,()=>dispatch({type:ACTION_TYPES.TOGGLE_CART}));
  const filterProducts=useMemo(()=>products.filter(item => item.count > 0),[products])
  console.log("🚀 ~ file: Modal.jsx ~ line 7 ~ Modal ~ ref", ref)
  
  return (
    <div ref={ref} className='customModal'>
       {filterProducts.length===0 && <h1>Ձեր քարտը դատարկ է։</h1>}
         {filterProducts.map(item=>
            <ProductItem dispatch={dispatch} {...item} key={item.id}/>
        )}
    </div>
  )
}
