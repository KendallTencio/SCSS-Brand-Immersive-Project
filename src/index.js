import "./styles/main.scss";

function burgerMenu() {
  var x = document.getElementById("nav");
  if (x.className === "site-nav") {
    x.className += " responsive";
  } else {
    x.className = "site-nav";
  }
}