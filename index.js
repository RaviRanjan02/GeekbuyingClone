   document.querySelector("#sing_in").addEventListener("click" , function(){
        window.location.href="login.html";
    })
    document.querySelector("#wishlist").addEventListener("click" , function(){
        window.location.href="wishlistNew.html";
    })
    document.querySelector("#cart").addEventListener("click" , function(){
        window.location.href="cart.html";
    })
    
    function  myfunction(){
        var x = document.querySelector("#sec").value;
        console.log(x);

        if(x=="Phones & Accessories"){
            window.location.href = "Phones&Accessories.html"
        }
        if(x=="sports & Outdoors"){
            window.location.href = "sports&outdoors.html"
        }
    }

    function  myfunc(){
        var x2 = document.querySelector("#productpage").value;
        console.log(x2);

        if(x2=="Phones & Accessories"){
            window.location.href = "Phones&Accessories.html"
        }
        if(x2=="sports & Outdoors"){
            window.location.href = "sports&outdoors.html"
        }
    }
   
   


   var  productdata = [
        {
            image_url: "https://img.gkbcdn.com/p/2018-10-25/xiaomi-aqara-temperature-humidity-sensor-white-1574132919397._w280_p1_.jpg",
            price: 38475.04,
            strikedoffprice : 62816.89 ,
            discount: "$24% Off",
        },
        {
            image_url: "https://img.gkbcdn.com/p/2017-07-26/xiaomi-wifi-amplifier-pro-black-1574132393616._w280_p1_.jpg" ,
           
            price: 39260.26 ,
            strikedoffprice : 49468.14 ,
           discount: "$26% Off",
        },
        {
            image_url: "https://img.gkbcdn.com/p/2019-08-27/tronsmart-t2-plus-20w--bluetooth-5-0-speaker-tws-1571994588089._w280_p1_.jpg" ,
            price: 24341.07 ,
            strikedoffprice : 36119.38 ,
            discount: "$21% Off",
        },
        {
            image_url: "https://img.gkbcdn.com/p/2019-01-31/tronsmart-element-force-portable-bluetooth-speaker-1571993707403._w280_p1_.jpg" ,
            price: 83814.49,
            strikedoffprice : 117782.36,
            discount: "$9% Off",
        },
        {
            image_url: "https://img.gkbcdn.com/p/2021-12-09/3-7V-108-Lamp-Beads-Solar-Wall-Lamp-480326-0._w280_p1_.jpg" ,
            price: 83814.49,
            strikedoffprice : 117782.36,
            discount: "9% Off",
        },
    ];

    productdata.map(function(elem){
     var div = document.createElement("div");
    var image = document.createElement("img");
    image.setAttribute("src",elem.image_url);
    var p = document.createElement("h3")
    p.textContent=elem.price;
    var Dp = document.createElement("h5");
    Dp.textContent = elem.strikedoffprice;
    var dis = document.createElement("h4");
    dis.textContent = elem.discount
    div.append(image ,p,Dp ,dis );
    document.querySelector("#boxthree").append(div);
    })

    var  product = [
        {
            image_url: "https://img.gkbcdn.com/s3/bn/2201/461146-61d3a90b2b40c9181491b951.jpg",
            price: "Tronsmart T6 Pro",
            dis :"Patented SoundPulse technology,three EQ effects,up to 24 hours playtime " ,
           
        },
        {
            image_url: "https://img.gkbcdn.com/s3/bn/2201/481993-61d3a93c2b40c9181491b952.jpg" ,
           
            price: "Wlyoys RC Car ",
           dis: "independent 60A ESC, up to 75km/h, aliminum alloy body",
        },
        {
            image_url:" https://img.gkbcdn.com/s3/bn/2201/472275-61d3a8a42b40c9181455eb2e.jpg" ,
            price: "Eleglide D1 Off-road E-Scooter",
            dis: "10'' pneumatic tires, 500W motor,48V 18A battery,45/h max speed",
        },
        {
            image_url: "https://img.gkbcdn.com/s3/bn/2201/459892-61d3a8d72b40c9181455eb2f.jpg" ,
            price: "ACGAM B1-402 Treadmill",
            dis: "Jogging & running 2 in 1, installation-free built-in Bluetooth speaker",
        },
     
    ];
product.map(function(elem){
    var div = document.createElement("div")
    var p = document.createElement("h4")
    p.textContent=elem.price;
    var image = document.createElement("img")
    image.setAttribute("src",elem.image_url)
    var pone = document.createElement("h5")
    pone.textContent=elem.dis
    div.append(p,image,pone);
   document.querySelector("#boxfour").append(div);
})


var  data = [
        {
            image_url: "https://img.gkbcdn.com/p/2022-01-13/Mijia-MUL11-Faucet-Water-Filter-Purifier-493442-0._w280_p1_.jpg",
            price: "$38475.04",
            strikedoffprice : "$62816.89" ,
            discount: "Xiaomi Mijia MUL11 Faucet Water Filter Purifier 0.1um",
        },
        {
            image_url: "https://img.gkbcdn.com/p/2022-01-05/Kospet-Rock-Bluetooth-Smartwatch-1-69-Inch-Rectangle-Black-492533-0._w280_p1_.jpg" ,
           
            price: "$39260.26" ,
            strikedoffprice : "$49468.14" ,
           discount: "Kospet Rock Outdoor Bluetooth Smartwatch 1.69 Inch",
        },
        {
            image_url: "https://img.gkbcdn.com/p/2021-12-30/25m-roll-15mm-Wide-1mm-Thick-Rubber-Magnet-Tape-490024-0._w280_p1_.jpg" ,
            price: "$24341.07" ,
            strikedoffprice : "$36119.38" ,
            discount: "25/roll 15mm Wide*1mm Thick Self Adhesive Flexible",
        },
        {
            image_url: "https://img.gkbcdn.com/p/2022-01-11/8BitDo-SN30-Pro-Bluetooth-Game-Controller-493147-0._w280_p1_.jpg" ,
            price: "$83814.49",
            strikedoffprice : "$117782.36",
            discount: "8BitDo SN30 Pro Bluetooth Game Countroller for Xbox",
        },
        {
            image_url: "https://img.gkbcdn.com/p/2022-01-07/gub-af02-telescopic-bicycle-fender-black-4e646e-1641518558421._w280_p1_.jpg" ,
            price: "$83814.49",
            strikedoffprice : "$117782.36",
            discount: "ADO A20F Ebike Plastic Fenders Mudguard 1Pair",
        },
    ];
    data.map(function(elem){
        var div = document.createElement("div");
    var image = document.createElement("img");
    image.setAttribute("src",elem.image_url);
    var p = document.createElement("h3")
    p.textContent=elem.price;
    var Dp = document.createElement("h5");
    Dp.textContent = elem.strikedoffprice;
    var dis = document.createElement("h4");
    dis.textContent = elem.discount
    div.append(image ,dis,p,Dp  );
    document.querySelector("#boxfive").append(div);
    })

