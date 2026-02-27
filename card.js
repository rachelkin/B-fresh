function createProductHTML(product) {
    return `
    <div class="product">
      <img src="${product.url}" alt="${product.name}">
      <h3>${product.name}</h3>
      <button id ='to_watch'onclick="createcardHTML()>לצפיה במוצר </button>
    </div>
  `;
}
import { products } from "./dataModels.js";
const container1 = document.getElementById("products-container");

let allProductsHTML = "";
for (const pro of products) {
    allProductsHTML += createProductHTML(pro);
}

container1.innerHTML = allProductsHTML;
// products.forEach(product => {
//     console.log(product.url);
// });


// document.addEventListener("DOMContentLoaded", () => {
//   document.getElementById("to_watch").addEventListener("click", () => {
//     createcardHTML(); 
//   });
// });
