console.log("script loaded");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const myProduct = urlParams.get("id");

console.log("The product id is", myProduct);

let productId = myProduct;
let productContainer = document.querySelector(".productContainer");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`) //linket som giver adgang til produkter
  .then((response) => response.json()) // vi henter json data som er alt data om produkterne på på linket
  .then((data) => showProduct(data));

function showProduct(data) {
  //bagefter smider den data ind i følgende funktion:
  productContainer.innerHTML = `
    <h1>Produkt</h1>
        <p>Hjem > Sport > Big Cat Backpack Black</p>
        <div class="grid1_1">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="rygsæk">
            <div class="produktinformation">
                <h1 class="navn_rygsæk">${data.productdisplayname}</h1>
                <h2>Mærke</h2>
                <p class="puma">${data.brandname}</p>
                <h2>Pris</h2>
                <p class="pris">${data.price}</p>
                <h2>Varenummer</h2>
                <p class="varenummer">${data.id}</p>
                <h2>Sæson</h2>
                <p class="sæson">${data.season}</p>
                 <a class="indkøbskurv" href="produkt.html">Læg i indkøbskurv</a>
            </div>
        </div>
`;
}
