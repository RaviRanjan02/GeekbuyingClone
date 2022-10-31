document.querySelector("form").addEventListener("submit",function(e){
    e.preventDefault();
    var otp = document.querySelector("#otp").value;
    if(otp==1234){
        alert("payment successful");
        window.location.href='success2.html';
    }
});