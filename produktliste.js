let listContainer = document.querySelector(".container");

fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  let markup = "";
  products
    .map((product) => {
      markup += ` <div class="box">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="rygsæk">
                <h2>${product.productdisplayname}</h2>
              <p class="puma">${product.brandname}</p>
                <p class="pris">${product.price}</p>
                <a class="se_mere" href="produkt.html">Se mere</a>
            </div>`;
    })
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
