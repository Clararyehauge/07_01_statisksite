console.log("script loaded");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const myCategory = urlParams.get("category");

console.log("Kategori", myCategory);

let listContainer = document.querySelector(".container");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCategory}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  const markup = products
    .map(
      (product) => ` 
    <div class="box">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="rygsæk">
                <h2>${product.productdisplayname}</h2>
              <p class="puma">${product.brandname}</p>
                <p class="pris">${product.price}</p>
     <a class="se_mere" href="produkt.html?id=${product.id}">Se mere</a>
            </div>
    `
    )
    .join("");
  listContainer.innerHTML = markup;
}
