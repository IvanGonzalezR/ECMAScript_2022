import axios from "axios";

let response = await axios('https://api.escuelajs.co/api/v1/products');
let products = response.data;
// console.log(products);

export { products };
