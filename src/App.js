import logo from './logo.svg';
import './App.css';
import { useEffect,useReducer, useState } from 'react';
import { getProducts } from './utils/requests';
import Header from './Components/Header';
import ProductContainer from './Components/ProductContainer';
import Modal from './Components/Modal/Modal';
import useOutSideClick from './hooks/useOutSideClick'

export const ACTION_TYPES={
  SET_PRODUCTS: "SET_PRODUCTS",
  CHANGE_ITEM_COUNT:"CHANGE_ITEM_COUNT",
  TOGGLE_CART:"TOGGLE_CART",
}
const defaultState={
  products:[],
  isCartModalOpen:false
}

function reducer (state,action){
  switch(action.type){
    case ACTION_TYPES.SET_PRODUCTS:{
     return {...state,products:action.res}; 
    }
    case ACTION_TYPES.CHANGE_ITEM_COUNT:{
      let products=state.products.map(item=>{
        if(item.id===action.id){
          return{...item,count:item.count+action.count}
        }
        else{
          return item;
        }
      })
      return {...state,products}
    }
    case ACTION_TYPES.TOGGLE_CART:{
      return {...state,isCartModalOpen:!state.isCartModalOpen}
    }
  }
  
}

function App() {
  const [state,dispatch] = useReducer(reducer,defaultState);
  // useOutSideClick()

  useEffect(() => {
    getProducts().then(res => {
        let newRes = res.map(item => ({ ...item, count: 0 }))
        dispatch({ type: ACTION_TYPES.SET_PRODUCTS, res: newRes });
    });
}, [])

 
console.log(state.isCartModalOpen, 'cart is open');
  return (
    <div className='relative'>
      <Header products={state.products} dispatch={dispatch}/>
      <ProductContainer products={state.products} dispatch={dispatch}/>
      {state.isCartModalOpen && <Modal dispatch={dispatch}  products={state.products}/>}
    </div>
  );
}

export default App;
