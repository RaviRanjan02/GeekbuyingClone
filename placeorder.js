 
             var  cartarr = JSON.parse(localStorage.getItem("cartitems"));
             var X = cartarr.reduce(function(acc, cv){
                  return acc + +cv.price;
             },0);
             var total = document.querySelector("#total");
                total.textContent=`Order Subtotal: ${X}`;

                var final = document.querySelector("#final");
                final.textContent=`Grand Total: ${X}`;

        document.querySelector("#formsubmit").addEventListener("submit",coupanfun);
         function coupanfun(event){
            event.preventDefault();
             
            var  cartarr = JSON.parse(localStorage.getItem("cartitems"));
             var X = cartarr.reduce(function(acc, cv){
                  return acc + +cv.price;
             },0);
               console.log(X);
            var Cvalue = document.querySelector("#coupan").value;
            if(Cvalue == "masai30"){
               var AfterDiscount = (X*70)/100;
                var Dvalue = (X*30)/100;
                alert("coupan applyed");
            }else{
                alert("Invalid coupan");
            }

               var Discount = document.querySelector("#dis");
               Discount.textContent=`Coupan Amount: -${Dvalue}`;

                var final = document.querySelector("#final");
                final.textContent=`Grand Total: ${AfterDiscount}`;
         }
