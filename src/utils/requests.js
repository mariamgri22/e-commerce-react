 import { products } from './products';

import { useEffect } from "react";


async function getProducts() {
	let res = JSON.parse(products);
	return res;
};

export { getProducts };

