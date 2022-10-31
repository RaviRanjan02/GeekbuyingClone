//    click function for login, wishlist, cart
document.querySelector("#sign_in").addEventListener("click", function () {
  window.location.href = "login.html";
});
document.querySelector("#wislist").addEventListener("click", function () {
  window.location.href = "wishlistNew.html";
});
document.querySelector("#cart").addEventListener("click", function () {
  window.location.href = "cart.html";
});
//   click function end

function myfunction() {
  var x = document.querySelector("#sec").value;
  console.log(x);

  if (x == "Phones & Accessories") {
    window.location.href = "Phones&Accessories.html";
  }
}

function myfunc() {
  var x2 = document.querySelector(".s2").value;
  console.log(x2);

  if (x2 == "Phones & Accessories") {
    window.location.href = "Phones&Accessories.html";
  }
}

productdata = [
  {
    image_url:
      "https://img.gkbcdn.com/p/2020-07-21/walkingpad-treadmill-r1-smart-folding-walking-and-running-machine-1595324388511._w280_p1_.jpg",
    name: "kingSmith WalkingPad R1 Pro Tredmill 2 in 1 smart Folding",
    price: 38475.04,
    strikedoffprice: 62816.89,
    brand: "Eliglide",
  },
  {
    image_url:
      "https://img.gkbcdn.com/p/2020-08-27/syl-08-electric-skateboard-off-road-with-remote-control-black-1598514023841._w280_p1_.jpg",
    name: "SYL-08 V3 Version Electric Off Road Skateboard",
    price: 39260.26,
    strikedoffprice: 49468.14,
    brand: "ENGWE",
  },
  {
    image_url:
      "https://img.gkbcdn.com/p/2021-09-10/eleglide-s1-folding-electric-scooter-10--pneumatic-tires-black-1631275059614._w280_p1_.jpg",
    name: "Eleglide S1 Folding Elec Pneumatic Tires",
    price: 24341.07,
    strikedoffprice: 36119.38,
    brand: "Eliglide",
  },
  {
    image_url:
      "https://img.gkbcdn.com/p/2020-06-12/ENGWE-EP-2-Folding-Electric-Moped-Bicycle-Black-906550-._w280_p1_.jpg",
    name: "ENNGWE EP-2 Pro 750W 20 inch Fat Tire Electric Folding",
    price: 83814.49,
    strikedoffprice: 117782.36,
    brand: "ENGWE",
  },
  {
    image_url:
      "https://img.gkbcdn.com/p/2019-04-12/kugoo-s1-folding-electric-scooter-350w-motor-8-0-inch-tire-black-1574215594881._w280_p1_.jpg",
    name: "ENGWE EP-2 Pro 750W 20 inch Fat Tire Electric Folding",
    price: 83814.49,
    strikedoffprice: 117782.36,
    brand: "ENGWE",
  },
  {
    image_url:
      "https://img.gkbcdn.com/p/2020-06-12/ENGWE-EP-2-Folding-Electric-Moped-Bicycle-Gray-906551-._w280_p1_.jpg",
    name: "KUGOO S1 Folding Electric Scooter 350W Motor LCD",
    price: 25126.29,
    strikedoffprice: 31408.05,
    brand: "ENGWE",
  },
  {
    image_url:
      "https://img.gkbcdn.com/p/2019-10-10/xiaomi-ninebot-max-g30-electric-scooter-350w-motor-max-30km-h-black-1574132374489._w280_p1_.jpg",
    name: "Ninebot KickScooter Max G30 G30P Portable Folding Electric",
    price: 54964.68,
    strikedoffprice: 67528.22,
    brand: "ENGWE",
  },
  {
    image_url:
      "https://img.gkbcdn.com/p/2019-06-14/scooter-front-tube-bag-tools-storage-for-xiaomi-mijia-m365-1574132417833._w280_p1_.jpg",
    name: "Front Tube Bag Large Capacity Tools Storage",
    price: 1726.7,
    strikedoffprice: 67528.22,
    brand: "ADO",
  },
  {
    image_url:
      "https://img.gkbcdn.com/p/2021-12-29/bogist-c1-pro-folding-electric-scooter-500w-motor-13ah-battery-black-ef2cd9-1640740787540._w280_p1_.jpg",
    name: "BOGIST C1 PRO Folding Electric 10 Tire 500W",
    price: 45542.03,
    strikedoffprice: 59676.01,
    brand: "ADO",
  },
  {
    image_url:
      "https://img.gkbcdn.com/p/2021-06-17/onebot-s6-folding-electric-bike-250w-motor-max-25km-h-black-1623929411239._w280_p1_.jpg",
    name: "ADO A20 Electric folding Bike 20 inch City Bicycle",
    price: 65957.78,
    strikedoffprice: 117782.36,
    brand: "ADO",
  },
  {
    image_url:
      "https://img.gkbcdn.com/p/2020-12-17/engwe-ep-2-pro-folding-fat-tire-electric-moped-bicycle-green-1608186539235._w280_p1_.jpg",
    name: "ENGWE EP-2 Pro 750W 20 inch Fat Tire Electric Folding",
    price: 83814.49,
    strikedoffprice: 117782.36,
    brand: "ENGWE",
  },
  {
    image_url:
      "https://img.gkbcdn.com/p/2021-04-07/himo-z20-folding-electric-bicycle-20-inch-tire-gray-1617790149351._w280_p1_.jpg",
    name: "HIIMO Z20 Folding Electric Bicycle 20 Inch Tire 250W DC",
    price: 65643.69,
    strikedoffprice: 84247.93,
    brand: "HIMO",
  },
  {
    image_url:
      "https://img.gkbcdn.com/p/2021-04-07/himo-z20-folding-electric-bicycle-20-inch-tire-gray-1617790149351._w280_p1_.jpg",
    name: "HIIMO Z20 Folding Electric Bicycle 20 Inch Tire 250W DC",
    price: 65643.69,
    strikedoffprice: 84247.93,
    brand: "HIMO",
  },
  {
    image_url:
      "https://img.gkbcdn.com/p/2020-12-17/engwe-ep-2-pro-folding-fat-tire-electric-moped-bicycle-green-1608186539235._w280_p1_.jpg",
    name: "ENGWE EP-2 pro 750W 20 inch Fat tire Electric",
    price: 83814.49,
    strikedoffprice: 117782.36,
    brand: "ENGWE",
  },
  {
    image_url:
      "https://img.gkbcdn.com/p/2021-06-17/onebot-s6-folding-electric-bike-250w-motor-max-25km-h-black-1623929411239._w280_p1_.jpg",
    name: "ADO A20 Electric Folding Bike 20 iinch Bicycle 350W",
    price: 65957.78,
    strikedoffprice: 117782.36,
    brand: "ADO",
  },
  {
    image_url:
      "https://img.gkbcdn.com/p/2021-09-10/eleglide-d1-off-road-folding-electric-scooter-10--tires-black-1631276238189._w280_p1_.jpg",
    name: "Eleglide D1 off-road Folding Electric Scooter 10",
    price: 53348.7,
    strikedoffprice: 62820.04,
    brand: "Eliglide",
  },
  {
    image_url:
      "https://img.gkbcdn.com/p/2020-04-07/Inner-Tube-For-KUGOO-M4-890479-._w280_p1_.jpg",
    name: "Inner Tube For KUDGOO KIRIN M4 Pro Electric",
    price: 53348.7,
    strikedoffprice: 3000.23,
    brand: "ADO",
    // brand:
  },
  {
    image_url:
      "https://img.gkbcdn.com/p/2019-09-07/xiaomi-himo-c20-foldable-electric-moped-bicycle-max-25km-h-white-1574132314960._w280_p1_.jpg",
    name: "Xiaomi HIMO C20 Electric Moped BIcycle 250W Motor",
    price: 53394.24,
    strikedoffprice: 78521.31,
    brand: "HIMO",
  },
  {
    image_url:
      "https://img.gkbcdn.com/p/2021-04-01/fiido-d11-folding-electric-moped-bicycle-20--250w-motor-blue-1617240855685._w280_p1_.jpg",
    name: "FIIDO d11 Folding Electric Moped Bicycle 20 inches Tire",
    price: 78521.31,
    strikedoffprice: 102077.94,
    brand: "FIIDO",
  },
  {
    image_url:
      "https://img.gkbcdn.com/p/2021-09-01/NAVEE--N65-10in-48V-500W-65KM-Mileage-Electric-Scooter-471545-3._w280_p1_.jpg",
    name: "NAVEE N65 10-inch Folding Electric Scooter 500W motor",
    price: 57346.26,
    strikedoffprice: 78521.31,
    brand: "NAVEE",
  },
  {
    image_url:
      "https://img.gkbcdn.com/p/2021-09-01/NAVEE--N65-10in-48V-500W-65KM-Mileage-Electric-Scooter-471545-3._w280_p1_.jpg",
    name: "KugooKirin M4 Folding Electric Offroad Scooter 10",
    price: 45542.03,
    strikedoffprice: 53394.24,
    brand: "KugooKirin",
  },
  {
    image_url:
      "https://img.gkbcdn.com/p/2021-06-21/ado-a20-electric-folding-bike-350w-motor-10-4ah-battery-black-1624271781922._w280_.png",
    name: "ADO a26 Electric Moped Bike 26 inch Mountain Bike ",
    price: 84803.08,
    strikedoffprice: 109930.15,
    brand: "ADO",
  },
  {
    image_url:
      "https://img.gkbcdn.com/p/2021-04-01/fiido-d11-folding-electric-moped-bicycle-20--250w-motor-blue-1617240855685._w280_p1_.jpg",
    name: "FIIDO d11 Folding Electric Moped Bicycle 20 inches tire",
    price: 84017.86,
    strikedoffprice: 102077.94,
    brand: "FIIDO",
  },
  {
    image_url:
      "https://img.gkbcdn.com/p/2019-10-10/xiaomi-ninebot-max-g30-electric-scooter-350w-motor-max-30km-h-black-1574132739541._w280_p1_.jpg",
    name: "Ninebot KickScooter Max G30 G30 Portable Folding Electric",
    price: 54964.68,
    strikedoffprice: 67528.22,
    brand: "Ninebot",
  },
  {
    image_url:
      "https://img.gkbcdn.com/p/2021-09-02/kugoo-m4-pro-electric-scooter-500w-motor-48v-16ah-battery-55km-range-1630565928120._w280_p1_.jpg",
    name: "KugooKirin M4 Pro Folding Electric Scooter",
    price: 54964.68,
    strikedoffprice: 70669.1,
    brand: "FIIDO",
  },
  {
    image_url:
      "https://img.gkbcdn.com/p/2019-09-07/xiaomi-himo-c20-foldable-electric-moped-bicycle-max-25km-h-gray-1574132193039._w280_p1_.jpg",
    name: "Xiaomi HIMO C20 Electric Moped Bicycle 250w",
    price: 53394.24,
    strikedoffprice: 78521.31,
    brand: "HIMO",
  },
  {
    image_url:
      "https://img.gkbcdn.com/p/2021-09-14/eleglide-d1-master-off-road-folding-electric-scooter-10--tires-black-1631613267943._w280_p1_.jpg",
    name: "Eliglide D1 Master off-road Folding Electric Scooter 10",
    price: 80024.23,
    strikedoffprice: 102080.3,
    brand: "Eliglide",
  },
  {
    image_url:
      "https://img.gkbcdn.com/p/2019-12-23/fiido-m1-folding-electric-moped-bike-max-24km-h-black-1577067452537._w280_p1_.jpg",
    name: "FIIDO M1 Pro Folding Electric Mountain Bike 20",
    price: 90299.63,
    strikedoffprice: 113071.04,
    brand: "FIIDO",
  },
  {
    image_url:
      "https://img.gkbcdn.com/p/2021-09-29/KugooKirin-S4-10inches-electric-scooter-Black-472898-0._w280_p1_.jpg",
    name: "Kugookirin S4 10 inch Pneumatic Tire Folding",
    price: 36904.6,
    strikedoffprice: 47112.47,
    brand: "Kugookirin",
  },
  {
    image_url:
      "https://img.gkbcdn.com/p/2022-01-18/bluetti-eb240-power-station-2400wh-1000w-inverter-solar-generator-de4225-1642502638333._w280_p1_.jpg",
    name: "BLUETTI EB240 Portable Power Station 2400Wh",
    price: 132252.42,
    strikedoffprice: 170392.17,
    brand: "BLUETTI",
  },
  {
    image_url:
      "https://img.gkbcdn.com/p/2018-11-30/kugoo-s1-folding-electric-scooter-350w-motor-8-0-inch-tire-white-1574132515038._w280_p1_.jpg",
    name: "KuGGOO s1 Folding Electric Scooter 350W motor",
    price: 25126.29,
    strikedoffprice: 30622.83,
    brand: "KuGGOO",
  },
  {
    image_url:
      "https://img.gkbcdn.com/p/2020-01-09/fiido-d2s-folding-moped-electric-bike-gear-shifting-version-dark-gray-1578551523968._w280_p1_.jpg",
    name: "FIIDO D25 Folding Moped Electric Bike Gear Shifting",
    price: 51823.8,
    strikedoffprice: 63602.12,
    brand: "FIIDO",
  },
];

var cartarr = JSON.parse(localStorage.getItem("cartitems")) || [];
displaydata(productdata);

var wishlistarr = JSON.parse(localStorage.getItem("wishlistitems")) || [];
displaydata(productdata);

function handlebrand() {
  var selected_brand = document.querySelector("#brandshort").value;
  console.log(selected_brand);

  var filterlist = productdata.filter(function (elem) {
    return elem.brand == selected_brand;
  });
  console.log(filterlist);
  displaydata(filterlist);
}

function handlepriceshort() {
  var selected = document.querySelector("#priceshort").value;
  console.log(selected);

  if (selected == "high") {
    productdata.sort(function (a, b) {
      return Number(b.price) - Number(a.price);
    });
  }
  if (selected == "low") {
    productdata.sort(function (a, b) {
      return Number(a.price) - Number(b.price);
    });
  }
  console.log(productdata);
  displaydata(productdata);
}

function displaydata(productdata) {
  document.querySelector(".box3").innerHTML = "";
  productdata.map(function (data) {
    var div = document.createElement("div");
    div.setAttribute("id", "divhover");
    //img,name,price,strikedoffprice

    // image creation
    var image = document.createElement("img");
    image.setAttribute("src", data.image_url);

    // name creation

    var name = document.createElement("p");
    name.textContent = data.name;

    // price creation

    var div2 = document.createElement("div");
    div2.setAttribute("id", "flex");

    var h1 = document.createElement("h2");
    h1.textContent = "₹";

    var h2 = document.createElement("h2");
    h2.textContent = data.price;

    div2.append(h1, h2);

    var div3 = document.createElement("div");
    div3.setAttribute("id", "flex2");

    var p1 = document.createElement("p");
    p1.textContent = "₹";

    var p2 = document.createElement("p");
    p2.textContent = data.strikedoffprice;
    p2.style.textDecoration = "line-through";

    div3.append(p1, p2);

    var btn = document.createElement("button");
    btn.setAttribute("id", "cartbtn");
    btn.textContent = "Add To Cart";
    btn.addEventListener("click", function () {
      addtocart(data);
    });

    var btn2 = document.createElement("button");
    btn2.setAttribute("id", "wishlistbtn");
    btn2.innerHTML =
      '<i  style="font-size:25px;color:grey"  class="far fa-heart"></i>';

    btn2.addEventListener("click", function () {
      addtowishlist(data);
    });

    //append
    div.append(image, name, div2, div3, btn, btn2);
    document.querySelector(".box3").append(div);
  });
}

function addtocart(data) {
  console.log(data);
  cartarr.push(data);
  localStorage.setItem("cartitems", JSON.stringify(cartarr));
  alert("added to cart successfully");
}

function addtowishlist(data) {
  console.log(data);
  wishlistarr.push(data);
  localStorage.setItem("wishlistitems", JSON.stringify(wishlistarr));
  alert("added to Wishlist successfully");
}
