console.log("index script loaded");

const listContainer = document.querySelector(".category_list_container");

fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then(showCategory);

function showCategory(data) {
  console.log("Min data er:", data);

  const markup = data
    .map(
      (element) => `
<a class="category" href="produktliste.html?category=${element.category}">${element.category}</a>
`
    )
    .join("");

  console.log("min markup er", markup);
  listContainer.innerHTML = markup;
}
