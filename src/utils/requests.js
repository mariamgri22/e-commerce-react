// import { products } from './products';

import { useEffect } from "react";


// async function getProducts() {
// 	let res = JSON.parse(products);
// 	return res;
// };

// export { getProducts };

useEffect( ()=> async function getProducts(){
	let res=await fetch('https://dummyjson.com/products')
	let data=await res.json();

},[])
export {getProducts};