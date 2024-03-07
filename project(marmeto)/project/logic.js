let categorySelect = document.querySelectorAll(".btn");
let container = document.getElementById("container");
let storeData = {};

categorySelect.forEach((category) => {
  category.addEventListener("click", (event) => {
    categorySelect.forEach((category) => {
      category.classList.remove("active");
    });
    category.classList.add("active");
  });
});

fetch(
  "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    storeData = data;
  });

let renderData = (value) => {
  let categoryData = storeData.categories.filter((item) => {
    if (item.category_name.toLowerCase() === value.toLowerCase()) {
      return true;
    }
  });
  console.log("vsv", categoryData);
  const divElement = document.createElement("div");
  let htmlContent = "";
  categoryData[0].category_products.map((item) => {
    htmlContent += `
            <div class="card_content">
            <div>
                <span class="badge">${item.badge_text}</span>
                <img id="test" src=${item.image} alt="error"></img>
            </div>
            <div class="detail_section">
                <span class="product_title">${item.title}</span>
                <span class="vendor_name">${item.vendor}</span>
            </div> 
            <div class="price_section">
                <span class="price">Rs.${item.price}</span>
                <span class="compared_price">${item.compare_at_price}</span>
                <span class="discount"></span>
            </div>
            <div class="add_to_cart">Add to Cart</div>
            </div>`;
  });
  divElement.innerHTML = htmlContent;
  divElement.style.display = "flex";
  return divElement;
};

categorySelect.forEach((category) => {
  category.addEventListener("click", (event) => {
    const clickedElement = event.target;
    const divElement = clickedElement.closest(".btn");
    if (divElement) {
      const value = divElement.getAttribute("value");
      //  console.log('new',value);
      let abc = renderData(value);
      // console.log(abc);
      container.innerHTML = "<div></div>";
      container.appendChild(abc);
    }
  });
});
