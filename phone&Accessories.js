
        //    click function for login, wishlist, cart
   document.querySelector("#sing_in").addEventListener("click" , function(){
        window.location.href="login.html";
    })
    document.querySelector("#wislist").addEventListener("click" , function(){
        window.location.href="wishlistNew.html";
    })
    document.querySelector("#cart").addEventListener("click" , function(){
        window.location.href="cart.html";
    })
    //   click function end

    function  myfunction(){
        var x = document.querySelector("#sec").value;
        console.log(x);

        if(x=="sports & Outdoors"){
            window.location.href = "sports&outdoors.html"
        }
    }

    
    function  myfunc(){
        var x2 = document.querySelector(".s2").value;
        console.log(x2);

        if(x2=="sports & Outdoors"){
            window.location.href = "sports&outdoors.html"
        }
    }

    Phonesdata = [
    {
         image_url: "https://img.gkbcdn.com/p/2021-11-12/xiaomi-redmi-note-11-5g-smartphone-8gb-256gb-black-1636705048083._w280_p1_.jpg" ,
         name: "Xiaomi Redmi Note 11 CN Version 5G Smartphone" ,
         price: 33763.72,
         strikedoffprice : 39260.26,
         brand: "Xiaomi",
    },
    {
         image_url: "https://img.gkbcdn.com/p/2021-12-30/xiaomi-mi-12-6-28--5g-smartphone-snapdragon-8-8gb-128gb-black-6a24bb-1640827752278._w280_p1_.jpg" ,
         name: "Xiaomi Mi 12 CN Version 5G Smartphone 6.28 inch" ,
         price: 65565.17,
         strikedoffprice : 72396.59,
         brand: "Xiaomi",
    },
    {
         image_url: "https://img.gkbcdn.com/p/2020-08-03/Xiaomi-Redmi-9A-6-53--MTK-Helio-G25-Smartphone-4GB-64GB-Blue-425886-0._w280_p1_.jpg" ,
         name: "Xiaomi Redmi 9A CN Version 4G LTE SmartPhone" ,
         price: 10913.79,
         strikedoffprice :12562.75,
         brand: "Xiaomi",
    },
    {
         image_url: "https://img.gkbcdn.com/p/2020-08-03/Xiaomi-Redmi-9A-6-53--MTK-Helio-G25-Smartphone-4GB-64GB-Green-425885-0._w280_p1_.jpg" ,
         name: "Xiaomi Redmi 9A cN Version 4G LTE SmartPhone" ,
         price: 11463.44,
         strikedoffprice : 12562.75,
         brand: "Xiaomi",
    },
    {
         image_url: "https://img.gkbcdn.com/p/2022-01-05/Realme-GT2-Pro-6-7-Inches-Snapdragon-8-8GB-256GB-Green-492530-0._w280_p1_.jpg" ,
         name: "Realme GT2 Pro CN Version 5G Smrtphone" ,
         price: 70276.49,
         strikedoffprice : 74987.82,
         brand: "Realme",
    },
    {
         image_url: "https://img.gkbcdn.com/p/2019-04-03/estrella-class10-micro-sd-memory-card-tf-for-phones-tablet-32g-1571984039891._w280_p1_.jpg" ,
         name: "ESTRELLA Class 10 SDHC 32GB Micro SD Card" ,
         price: 627.39,
         strikedoffprice : 60,
         brand: "ESTRELLA",
    },
    {
         image_url: "https://img.gkbcdn.com/p/2022-01-05/Realme-GT2-Pro-6-7-Inches-Snapdragon-8-8GB-256GB-White-492529-0._w280_p1_.jpg" ,
         name: "Realme GT20 Pro CN Version 5G Smartphone" ,
         price: 70276.49,
         strikedoffprice : 74987.82,
         brand: "Realme",
    },
    {
         image_url: "https://img.gkbcdn.com/p/2021-11-26/Wireless-car-charger--Qi-car-charger--15-W---10-W---7-5-W--auto-clamp-479546-1._w280_p1_.jpg" ,
         name: "Mpow Wireless QI Car Charger 15W/10W Clamp" ,
         price: 1883.75,
         strikedoffprice : 2747.49,
         brand: "Mpow",
    },
    {
         image_url: "https://img.gkbcdn.com/p/2012-06-11/composite-av-cable-for-iphone-4-4s-3g-3gs-white-1571982393974._w280_p1_.jpg" ,
         name: "Brand New Composite Cable for iphone" ,
         price: 784.44,
         strikedoffprice : 78,
         brand: "Mpow",
    },
    {
         image_url: "https://img.gkbcdn.com/p/2021-11-17/Global-Version-POCO-M3-Pro-478594-0._w280_p1_.jpg" ,
         name: "POCO M3 Pro GLobal Version 5G Smartphone" ,
         price: 17274.08,
         strikedoffprice : 21121.66,
         brand: "POCO",
    },
    {
         image_url: "https://img.gkbcdn.com/p/2014-04-14/qi-standard-wireless-charging-receiver-pad-for-samsung-galaxy-s5-i9600---blue-1571981666408._w280_p1_.jpg" ,
         name: "Qi Standard Wireless Reciver Pad for Samsung" ,
         price: 572.43,
         strikedoffprice :  57,
         brand: "Qi",
    },
    {
         image_url: "https://img.gkbcdn.com/p/2021-03-24/GaN-P60-GaN-65W-USB-C-Charger-457225-1._w280_p1_.jpg" ,
         name: "Gan-P60 GaN 65W USB c Charger" ,
         price: 2040.79,
         strikedoffprice : 3140.10,
         brand: "POCO",
    },
    {
         image_url: "https://img.gkbcdn.com/p/2020-08-03/Xiaomi-Redmi-9A-6-53--MTK-Helio-G25-Smartphone-4GB-64GB-Black-425888-0._w280_p1_.jpg" ,
         name: "Xiaomi Redmi 9A CN Version 4G LTE SmartPhone" ,
         price: 10913.79,
         strikedoffprice : 12562.75,
         brand: "Xiaomi",
    },
    {
         image_url: "https://img.gkbcdn.com/p/2017-05-12/red-pofan-po7-usb-to-lightning-data-cable-1572249005688._w280_p1_.jpg" ,
         name: "Red Pofan Po7 USB to 8 Pin Data Cable" ,
         price: 548.87,
         strikedoffprice : 12.75,
         brand: "POCO",
    },
    {
         image_url: "https://img.gkbcdn.com/p/2021-11-26/Wireless-Charger--3-in-1-Wireless-Charging-Station-for-All-iWatch-479548-0._w280_p1_.jpg" ,
         name: "Senso 3-in-1 Magnetic Wireless Charger" ,
         price: 1726.70,
         strikedoffprice : 2747.49,
         brand: "POCO",
    },
    {
         image_url: "https://img.gkbcdn.com/p/2021-11-17/OnePlus-7T-478580-0._w280_p1_.jpg" ,
         name: "OnePlus 7T Global Version 4G LTE Smartphone" ,
         price: 32193.28,
         strikedoffprice : 39181.74,
         brand: "OnePlus",
    },
    {
         image_url: "https://img.gkbcdn.com/p/2018-11-02/original-adidas-tpu-case-iphone-7-street-corner-art-1571986798031._w280_p1_.jpg" ,
         name: "Original adidas YPU case iphone 7" ,
         price: 1098.52,
         strikedoffprice : 109,
         brand: "iphone",
    },
    {
         image_url: "https://img.gkbcdn.com/p/2020-04-17/Global-ROM-OnePlus-8-6-55-Inch-5G-Smartphone-12GB-256GB-Onyx-Black-901961-._w280_p1_.jpg" ,
         name: "OnePlus 7T Global Version 4G LTE Smartphone" ,
         price: 75223.39,
         strikedoffprice : 5223.39,
         brand: "OnePlus",
    },
    {
         image_url: "https://img.gkbcdn.com/p/2019-05-10/protective-film-for-oneplus-7-transparent-1571983526857._w280_p1_.jpg" ,
         name: " Tempered Glass Protective Film for OnePLus 7" ,
         price: 313.30,
         brand: "OnePlus",
    },
    {
         image_url: "https://img.gkbcdn.com/p/2020-04-17/Global-ROM-OnePlus-8-6-55-Inch-5G-Smartphone-12GB-256GB-Glacial-Green-901946-._w280_p1_.jpg" ,
         name: "OnePlus6. 8.6.55 Inch Screen 5G Smartphone" ,
         price: 75223.39,
         strikedoffprice : 5223.39,
         brand: "OnePlus",
    },
    {
         image_url: "https://img.gkbcdn.com/p/2021-09-18/xiaomi-redmi-k40-gaming-edition-global-rom-6-67--8gb-256gb-black--1631946889460._w280_p1_.jpg" ,
         name: "Xiaomi Redmi K40 Gaming Edition Global" ,
         price: 39024.70,
         strikedoffprice : 54964.68,
         brand: "Xiaomi",
    },
    {
         image_url: "https://img.gkbcdn.com/p/2021-11-12/xiaomi-redmi-note-11-5g-smartphone-6gb-128gb-white-1636706884522._w280_p1_.jpg" ,
         name: "Xiaomi Redmi Note 1 CN Version 5G Smartphone" ,
         price: 27481.95,
         strikedoffprice : 32978.50,
         brand: "Xiaomi",
    },
    {
         image_url: "https://img.gkbcdn.com/p/2021-12-20/oppo-r11s-6-01-inch-4gb-64gb-smartphone-red-721452-1640003614062._w280_p1_.jpg" ,
         name: "OPPO Find N Foldable Flagship Smartphone" ,
         price: 141338.99,
         strikedoffprice : 41338.99,
         brand: "OPPO",
    },
    {
         image_url: "https://img.gkbcdn.com/p/2022-01-05/Realme-GT2-Pro-6-7-Inches-Snapdragon-8-12GB-512GB-White-492531-0._w280_p1_.jpg" ,
         name: "Realme GT2 Pro CN Version 5G Smartphone" ,
         price: 84410.47,
         strikedoffprice : 90692.24,
         brand: "Realme",
    },
    {
         image_url: "https://img.gkbcdn.com/p/2022-01-06/realme-gt-neo-2-cn-version-5g-6-62-inch-8gb-256gb-black-04be87-1641458077419._w280_p1_.jpg" ,
         name: "Realme GT Neo 2 CN Version 5G Smartphone" ,
         price: 41615.93,
         strikedoffprice : 44756.81,
         brand: "Realme",
    },
    {
         image_url: "https://img.gkbcdn.com/p/2021-05-05/xiaomi-redmi-k40-gaming-edition-cn-version-6-67--12gb-256gb-black-1620200155689._w280_p1_.jpg" ,
         name: "Xiaomi Redmi K40 Gaming Edition" ,
         price: 44756.81,
         strikedoffprice : 54964.68,
         brand: "Xiaomi",
    },
    {
         image_url: "https://img.gkbcdn.com/p/2021-05-26/xiaomi-mi-10-lite-6-57-inch-5g-smartphone-6gb-128gb-white-1622024146529._w280_p1_.jpg" ,
         name: "Redmi Note 10 Pro CN Version 6.6 Inch" ,
         price: 32193.28,
         strikedoffprice : 39260.26,
         brand: "Xiaomi",
    },
 ]


     var cartarr = JSON.parse(localStorage.getItem("cartitems"))||[]
     displaydata(Phonesdata);

     var  wishlistarr = JSON.parse(localStorage.getItem("wishlistitems"))||[]
     displaydata(Phonesdata);   

    function handlebrand(){
       var selected_brand = document.querySelector("#brandshort").value;
       console.log(selected_brand);

       var filterlist = Phonesdata.filter(function(elem){
         return elem.brand == selected_brand;
       })
       console.log(filterlist);
       displaydata(filterlist);
     }

    function handlepriceshort(){
    var selected = document.querySelector("#priceshort").value;
    console.log(selected);

    if(selected == "high"){
        Phonesdata.sort(function(a,b){
         return Number(b.price)-Number(a.price);
       });
    }
    if(selected == "low"){
        Phonesdata.sort(function(a,b){
         return Number(a.price)-Number(b.price);
       });
    }
    console.log(Phonesdata);
    displaydata(Phonesdata);
  }
     

     function displaydata(Phonesdata){
    document.querySelector(".box3").innerHTML ="";
    Phonesdata.map(function (data) {
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

    div3.append(p1,p2);

    var btn = document.createElement("button");
    btn.setAttribute("id", "cartbtn");
    btn.textContent = "Add To Cart";
    btn.addEventListener("click",function(){
    addtocart(data);
 });

    var btn2 = document.createElement("button");
    btn2.setAttribute("id", "wishlistbtn");
    btn2.innerHTML = '<i style="font-size:25px;color:grey" class="far fa-heart"></i>';
  
    btn2.addEventListener("click",function(){
    addtowishlist(data);
 });

    //append
    div.append(image, name,div2,div3,btn,btn2);
    document.querySelector(".box3").append(div);
  });
}

  function addtocart(data){
  console.log(data);
  cartarr.push(data);
  localStorage.setItem("cartitems",JSON.stringify(cartarr));
  alert("added to cart successfully")
}

  function  addtowishlist(data){
    console.log(data);
    wishlistarr.push(data);
    localStorage.setItem("wishlistitems",JSON.stringify( wishlistarr));
    alert("added to Wishlist successfully")

  }

