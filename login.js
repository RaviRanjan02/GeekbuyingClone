document.querySelector("form").addEventListener("submit", signin);

function signin(event) {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;

  console.log(email, pass);
  var data = JSON.parse(localStorage.getItem("signupdata"));
  var CCC = false;
  for (var i = 0; i < data.length; i++) {
    if (data[i].Email_id == email && data[i].pass_word == pass) {
      CCC = true;
      break;
    }
  }
  if (CCC) {
    alert("login successfull");
    window.location.href = "index.html";
  } else {
    alert("Wrong password");
  }
}
