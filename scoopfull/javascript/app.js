// ********** set date ************
// select span
const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());

// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-list");
// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-list");
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link => {
  link.addEventListener("click", e => {
    // prevent default
    e.preventDefault();
    links.classList.remove("show-list");

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    //
    let position = element.offsetTop - 62;

    window.scrollTo({
      left: 0,
      // top: element.offsetTop,
      top: position,
      behavior: "smooth"
    });
  });
});

// ********** Add to cart ************

// let cart = []

// function addToCart(productName, price) {
//   cart.push({name: productName, price: price});
//   updateCart();
//   console.log(cart);
// }


// function removeFromCart(index) {
//   cart.splice(index, 1);
//   updateCart();
// }

// function updateCart() {
//   let cartList = document.getElementById("cart");
//   let total = 0;
//   cartList.innerHTML = "";
//   for (let i = 0; i < cart.length; i++) {
//     let item = cart[i];
//     let listItem = document.createElement("li");
//     listItem.innerHTML = item.name + " - $" + item.price;
//     let removeButton = document.createElement("button");
//     removeButton.innerHTML = "Remove";
//     removeButton.onclick = function() {
//       removeFromCart(i);
//     }
//     listItem.appendChild(removeButton);
//     cartList.appendChild(listItem);
//     total += item.price;
//   }
//   let totalElement = document.getElementById("total");
//   totalElement.innerHTML = total.toFixed(2);
// }