// Function to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Function to get random data from an array without repetition
const getRandomData = (array, maxCount) => {
  const shuffledArray = shuffleArray(array);
  const data = shuffledArray.slice(0, Math.min(maxCount, shuffledArray.length));
  return data;
};

const getRandomRating = () => (Math.random() * 4.0 + 1.0).toFixed(1);

const createProductItem = (product) => {
  const sizes = product.sizes ? product.sizes : getRandomData(["S", "M", "L", "XL", "XXL"], 3);
  const numColors = Math.floor(Math.random() * 4) + 1; // Random number of colors between 1 and 4
  const colors = product.colors ? product.colors : getRandomData(["red", "blue", "green", "black", "white"], numColors);
  const rating = getRandomRating();

  return `
    <div class="item">
      <img src="${product.image}" alt="${product.title}"/>
      <hr style="width: 206px">
      <div class="info">
        <div class="row">
          <div class="price">$${product.price}</div>
          <div class="sized">${sizes.join(", ")}</div>
        </div>
        <div class="colors">
          Colors:
          <div class="row">
            ${colors.map((color) => `<div class="circle" style="background-color: ${color}"></div>`).join("")}
          </div>
        </div>
        <div class="row1">Rating: ${rating}</div>
      </div>
      <div class="add-cart-btn">
        <button class="add-cart" id="add-cart">Add To Cart</button>
      </div>
    </div>
  `;
};

const fetchDataAndRender = async (url, containerId) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const productContainer = document.getElementById(containerId);
    let html = "";
    if (Array.isArray(data)) {
      data.forEach((product) => {
        html += createProductItem(product);
      });
      productContainer.innerHTML = html;
    } else {
      console.error("Data is not an array.");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const currentUserString = JSON.parse(localStorage.getItem("currentUser"));
if (currentUserString !== null) {
  fetchDataAndRender("https://fakestoreapi.com/products", "product-container");
  fetchDataAndRender("https://fakestoreapi.com/products/category/men's clothing", "mens-product-container");
  fetchDataAndRender("https://fakestoreapi.com/products/category/women's clothing", "womens-product-container");
} else {
  window.location.href = "/shopping-cart/";
  alert("User not found");
}
