var signuparr = JSON.parse(localStorage.getItem("signupdata")) || [];

document.querySelector("#form").addEventListener("submit", submitform);
function submitform(event) {
  event.preventDefault();
  var nick = document.querySelector("#nickname").value;
  var Email = document.querySelector("#email").value;
  var password = document.querySelector("#pass").value;
  var obj = {
    Nick_name: nick,
    Email_id: Email,
    pass_word: password,
  };

  signuparr.push(obj);
  localStorage.setItem("signupdata", JSON.stringify(signuparr));
  alert("signup successfull");
  window.location.href = "login.html";
}
