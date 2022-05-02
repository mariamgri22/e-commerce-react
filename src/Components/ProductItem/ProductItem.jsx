import React from 'react'
import Counter from '../Counter/Counter'
import cart from './../../assets/cart.svg'
import {ACTION_TYPES} from '../../App';

export default function ProductItem({id,price,title,imageUrl,count, dispatch,withImage}) {
   const handleIconClick=()=>{
      dispatch({ type: ACTION_TYPES.CHANGE_ITEM_COUNT, id, count: +1 })
   }
    return (
    <div className='productItem'>
      {withImage && <img  className='image' src={imageUrl} alt={title} />}
       <span>{title}</span>
       <span>Գին՝ {price}</span>
       {count <=0 ? <img onClick={handleIconClick} className='icon' src={cart}/> : 
       <Counter dispatch={dispatch} count={count} id={id}/>}
    </div>
  )
}
