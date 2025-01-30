let = productId = 1526;
let productContainer = document.querySelector(".productContainer");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
    <h1>Produkt</h1>
        <p>Hjem > Sport > Big Cat Backpack Black</p>
        <div class="grid1_1">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${produkt.id}.webp" alt="rygsæk">
            <div class="produktinformation">
                <h1 class="navn_rygsæk">${productdisplayname}</h1>
                <h2>Mærke</h2>
                <p class="puma">${data.brandname}</p>
                <h2>Varenummer</h2>
                <p class="varenummer">${data.id}</p>
                <p class="season">${data.season}
                <a class="indkøbskurv" href="produkt.html">Læg i indkøbskurv</a>
            </div>
        </div>
`;
  });
