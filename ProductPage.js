import { products } from "./dataModels.js";
const container2 = document.getElementById("card-container");

let ProductsHTML = "";
for (const pro of products) {
    ProductsHTML += createCardHTML(pro);
}

function createCardHTML(product) {
    return `
    <div class="product">
      <img src="${product.url}" alt="${product.name}">
      <h3>${product.name}</h3>
      <h4>${product.discription}</h4>
      <p> מחיר: ₪ ${product.price} </p>
      ${product.sale ? `<p>מבצע: ${product.sale.Sale_quantity} ב ₪${product.sale.Sale_price}</p>` : ''}
      <button id ='to_buy'">הוספה לסל </button>
    </div>
  `;
  }
container2.innerHTML = ProductsHTML;
