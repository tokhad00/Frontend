const openCartButton = document.getElementById('open-cart-button');
const clearCartButton = document.getElementById('clear-cart-button');
const cartContainer = document.getElementById('cart-container');
const numberOfProductsContainer = document.getElementById('number-of-products');
let numberOfProductsInCart = Number(localStorage.numberOfProducts) || 0;
numberOfProductsContainer.innerHTML = `Количество товаров в корзине: ${numberOfProductsInCart}`;

function loadFile(filename) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', filename, true);
  xhr.onload = function() {
    const data = JSON.parse(this.responseText);
    renderProducts(data);
  }
  xhr.send(null);
}

function renderProducts(products) {
  const productsContainer = document.getElementById('products-list');
  productsContainer.innerHTML = '';

  products.forEach((product, index) => {
    const productCard = `
    <div class="card">
      <div class="card-body">
        <figure>
          <img src="${product.image}">
          <figcaption>
            <h4 class="card-title product-name">${product.name}</h4>
            <p class="card-text product-description">${product.description}</p>
            <p class="card-text product-number">Единиц в наличии: ${product.number}</p>
            <button class="btn btn-primary add-to-shopping-cart-button" data-id="${index}">В корзину</button>
          </figcaption>
        </figure>
      </div>
    </div>`;

  productsContainer.insertAdjacentHTML('beforeend', productCard);
  });

  const addToCartButtons = document.getElementsByClassName('add-to-shopping-cart-button');

  Array.from(addToCartButtons).forEach((button) => {
    button.addEventListener('click', addToCart);
  })
}

function getDataFromLS() {
  return JSON.parse(localStorage.getItem('cart'));
}

function addDataToLS(products) {
  localStorage.setItem('cart', JSON.stringify(products));
}

function addToCart() {
  const cartData = getDataFromLS() || {};
  const parentCard = this.parentNode.parentNode.parentNode;
  const productId = this.getAttribute('data-id');
  const productName = parentCard.querySelector('.product-name').innerText;

  if (cartData.hasOwnProperty(productId)) {
    cartData[productId][1] += 1;
  } else {
    cartData[productId] = [productName, 1];
  }

  addDataToLS(cartData);
  numberOfProductsInCart++;
  localStorage.numberOfProducts = numberOfProductsInCart;
  numberOfProductsContainer.innerHTML = `Количество товаров в корзине: ${numberOfProductsInCart}`;
}

function openCart() {
  const cartData = getDataFromLS();
  let table = '';

  if (cartData !== null) {
    table = '<table><th>Название</th><th>Количество</th>';
    for (let items in cartData) {
      table += '<tr>';
      for (let i = 0; i < cartData[items].length; i++) {
        table += '<td>' + cartData[items][i] + '</td>';
      }
      table += '</tr>';
    }
    table += '</table>';
    cartContainer.innerHTML = table;
  } else {
    cartContainer.innerHTML = 'В корзине пусто!';
  }
}

function clearCart() {
  localStorage.removeItem('cart');
  numberOfProductsInCart = 0;
  localStorage.numberOfProducts = numberOfProductsInCart;
  numberOfProductsContainer.innerHTML = `Количество товаров в корзине: ${numberOfProductsInCart}`;
  alert('Корзина очищена');
}

openCartButton.addEventListener('click', openCart);
clearCartButton.addEventListener('click', clearCart);

loadFile('products.json');