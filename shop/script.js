const currentUserString = JSON.parse(localStorage.getItem("currentUser"));

if (currentUserString !== null) {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((productsData) => renderProducts(productsData));
  function getRandomSizes() {
    const sizes = ["S", "M", "L", "XL", "XXL"];
    const randomSizes = [];
    const numSizes = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < numSizes; i++) {
      const randomIndex = Math.floor(Math.random() * sizes.length);
      randomSizes.push(sizes[randomIndex]);
    }
    return randomSizes;
  }

  function getRandomColors() {
    const colors = ["red", "blue", "green", "black", "white"];
    const randomColors = [];
    const numColors = Math.floor(Math.random() * 4) + 1;
    for (let i = 0; i < numColors; i++) {
      const randomIndex = Math.floor(Math.random() * colors.length);
      randomColors.push(colors[randomIndex]);
    }
    return randomColors;
  }

  function getRandomRating() {
    const rating = Math.random() * 4.0 + 1.0;

    return rating.toFixed(1);
  }

  function createProductItem(product) {
    // If sizes are not provided, generate random sizes
    const sizes = product.sizes ? product.sizes : getRandomSizes();

    const colors = product.colors ? product.colors : getRandomColors();
    const rating = getRandomRating();

    return `
      <div class="item">
        <img src="${product.image}" alt="${product.title}"/>
        <hr style="width:206px">
        <div class="info">
          <div class="row">
            <div class="price">$${product.price}</div>
            <div class="sized">${sizes.join(", ")}</div>
          </div>
          <div class="colors">
            Colors:
            <div class="row">
              ${colors
                .map(
                  (color) =>
                    `<div class="circle" style="background-color: ${color}"></div>`
                )
                .join("")}
            </div>
          </div>
          <div class="row1">Rating: ${rating}</div>
        </div>
        <div class = "add-cart-btn">
          <button class="add-cart" id="add-cart">Add To Cart</button>
        </div>
      </div>
    `;
  }
  function renderProducts(data) {
    const productContainer = document.getElementById("product-container");
    let html = "";
    if (Array.isArray(data)) {
      data.forEach((product) => {
        html += createProductItem(product);
      });
    } else {
      console.error("Data is not an array.");
    }
    productContainer.innerHTML = html;
  }

  fetch("https://fakestoreapi.com/products/category/men's clothing")
    .then((res) => res.json())
    .then((mensProductsData) => renderMensProducts(mensProductsData));

  function renderMensProducts(data) {
    const productContainer = document.getElementById("mens-product-container");
    let html = "";
    if (Array.isArray(data)) {
      data.forEach((product) => {
        html += createProductItem(product);
      });
    } else {
      console.error("Data is not an array.");
    }
    productContainer.innerHTML = html;
  }

  fetch("https://fakestoreapi.com/products/category/women's clothing")
    .then((res) => res.json())
    .then((womensProductsData) => renderwoMensProducts(womensProductsData));

  function renderwoMensProducts(data) {
    const productContainer = document.getElementById(
      "womens-product-container"
    );
    let html = "";
    if (Array.isArray(data)) {
      data.forEach((product) => {
        html += createProductItem(product);
      });
    } else {
      console.error("Data is not an array.");
    }
    productContainer.innerHTML = html;
  }
} else {
  window.location.href = "/shopping-cart/";
  alert("user not found");
}
