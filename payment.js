var  cartarr = JSON.parse(localStorage.getItem("cartitems"));
             var X = cartarr.reduce(function(acc, cv){
                  return acc + +cv.price;
             },0);
             var AfterDiscount = (X*70)/100;
             var total = document.querySelector("#total");
                total.textContent=`${AfterDiscount}`;
                var total = document.querySelector("#total2");
                total.textContent=`${Math.floor(AfterDiscount)}`;