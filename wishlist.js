function myfunction() {
  var x = document.querySelector("#sec").value;
  console.log(x);

  if (x == "Phones & Accessories") {
    window.location.href = "Phones&Accessories.html";
  }
  if (x == "sports & Outdoors") {
    window.location.href = "sports&outdoors.html";
  }
}

function myfunc() {
  var x2 = document.querySelector(".s2").value;
  console.log(x2);

  if (x2 == "Phones & Accessories") {
    window.location.href = "Phones&Accessories.html";
  }
  if (x2 == "sports & Outdoors") {
    window.location.href = "sports&outdoors.html";
  }
}

document.querySelector("#sing_in").addEventListener("click", function () {
  window.location.href = "login.html";
});
document.querySelector("#wishlist").addEventListener("click", function () {
  window.location.href = "wishlistNew.html";
});
document.querySelector("#cart").addEventListener("click", function () {
  window.location.href = "cart.html";
});
var cartarr = JSON.parse(localStorage.getItem("cartitems")) || [];
var wishlistarr = JSON.parse(localStorage.getItem("wishlistitems")) || [];
console.log(wishlistarr);
displaywishlist(wishlistarr);

function displaywishlist(wishlistarr) {
  document.querySelector(".whishlist-product").textContent = "";
  wishlistarr.map(function (a) {
    var DIV = document.createElement("div");
    DIV.setAttribute("class", "whishlistproduct");

    var Div1 = document.createElement("div");
    Div1.setAttribute("class", "whishlistproduct-img");
    var Img = document.createElement("img");
    Img.setAttribute("src", a.image_url);
    Div1.append(Img);

    var Div2 = document.createElement("div");
    Div2.setAttribute("class", "whishlist-product-details");
    Div2.textContent = a.name;

    var Div3 = document.createElement("div");
    var Btn = document.createElement("button");
    Btn.setAttribute("class", "whishlistcart-btn");
    Btn.textContent = "Add to Cart";
    Div3.append(Btn);
    Btn.addEventListener("click", function () {
      addtocart(a);
    });

    DIV.append(Div1, Div2, Div3);
    document.querySelector(".whishlist-product").append(DIV);
  });
}

function addtocart(a) {
  //   console.log(a);
  cartarr.push(a);
  localStorage.setItem("cartitems", JSON.stringify(cartarr));
  alert("added to cart successfully");
}
