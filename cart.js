
// retreving the data from the local storage from the cart array 

var cartarr = JSON.parse(localStorage.getItem("cartitems")) || [];
displaycartitem(cartarr);

// cart items function 
function displaycartitem(cartarr) {
  document.querySelector(".cart-item-box").textContent = "";
  cartarr.map(function (a, index) {
    var DIV = document.createElement("div");
    DIV.setAttribute("class", "cart-items");

    // cart items checkbox 
    var checkDiv = document.createElement("div");
    checkDiv.setAttribute("class", "cart-items-checkbox");
    var checkIn = document.createElement("input");
    checkIn.setAttribute("type", "checkbox");
    checkDiv.append(checkIn);
  //  cart item image
    var Div2 = document.createElement("div");
    Div2.setAttribute("class", "cart-item-image");
    var Img = document.createElement("img");
    Img.setAttribute("src", a.image_url);
    Div2.append(Img);
  // cart image product name 
    var Div3 = document.createElement("div");
    Div3.setAttribute("class", "cart-item-product-name");
    Div3.textContent = a.name;
// cart item product price
    var Div4 = document.createElement("div");
    Div4.setAttribute("class", "cart-item-product-price");
    Div4.textContent = a.price;
  //  cart item count 
    var Div5 = document.createElement("div");
    var InerDiv = document.createElement("div");
    InerDiv.setAttribute("class", "button-container");
    var Button1 = document.createElement("button");
    Button1.setAttribute("class", "cart-qty-plus");
    Button1.setAttribute("value", "+");
    Button1.setAttribute("type", "button");
    Button1.textContent = "+";
    var Input = document.createElement("input");
    Input.setAttribute("type", "text");
    Input.setAttribute("class", "qty form-control");
    Input.setAttribute("value", "1");
    var Button2 = document.createElement("button");
    Button2.setAttribute("class", "cart-qty-minus");
    Button2.setAttribute("value", "-");
    Button2.setAttribute("type", "button");
    Button2.textContent = "-";
    InerDiv.append(Button1, Input, Button2);
    Div5.append(InerDiv);
// cart item poduct total 
    var Div6 = document.createElement("div");
    Div6.setAttribute("class", "cart-item-product-total");
    Div6.textContent = a.price;
//  cart item product whislist 
    var Div7 = document.createElement("div");
    Div7.setAttribute("class", "cart-item-product-wishlist");
    var DivButton = document.createElement("button");
    DivButton.textContent = "Wishlist Delete";
    DivButton.addEventListener("click", function () {
      deletetask(index);
    });
    Div7.append(DivButton);

    DIV.append(checkDiv, Div2, Div3, Div4, Div5, Div6, Div7);
    document.querySelector(".cart-item-box").append(DIV);
  });
  
  // cart count total items
  
  var Count = document.querySelector(".cart-itemscount");
  Count.textContent = cartarr.length;
// cart item sub total 
  var SButton = document.querySelector("#Nub");
  SButton.textContent = `You choose ${cartarr.length} item(s)`;
// cart total of all item present in the cart
  var X = cartarr.reduce(function (acc, cv) {
    return acc + +cv.price;
  }, 0);
  var total = document.querySelector("#TOTAL");
  total.textContent = `Total : ₹ ${X}`;
  var subtotal = document.querySelector("#subTOTAL");
  subtotal.textContent = `Your Subtotal: ${X}`;
}

//  function to delete the cart item from the cart 
function deletetask(index) {
  console.log(index);

  cartarr.splice(index, 1);
  console.log(cartarr);
  localStorage.setItem("cartitems", JSON.stringify(cartarr));
  displaycartitem(cartarr);
}
