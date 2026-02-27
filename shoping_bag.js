import { products } from "./dataModels.js";
const container2 = document.getElementById("product-details");

function getProductIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function shoping_bag(productId) {
  const product = products.find(p => p.product_id == productId);
  return `
    <div class="product">
      <img src="${product.url}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p> מחיר: ₪ ${product.price} </p>
      ${product.sale ? <p>מבצע: ${product.sale.Sale_quantity} ב ₪${product.sale.Sale_price}</p> : ''}
    <button id="plus">➕></button>
    <input id="quantity" type="number" value="1" min="1" readonly /> 
    <button id="minus">➖</button>
    <p> סך לתשלום : ₪ ${product.price*quantity.value} </p>
    </div>
  `;
}
const productId = getProductIdFromURL();
container2.innerHTML = shoping_bag(productId);

// אחרי שהכרטיס נטען, נתחבר לאלמנטים
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const quantityInput = document.getElementById("quantity");

// מאזינים ללחצנים
plusBtn.addEventListener("click", () => {
  quantityInput.value ++;
});

minusBtn.addEventListener("click", () => {
  let current = parseInt(quantityInput.value);
  if (current > 1) {
    quantityInput.value = current - 1;
  }
});
