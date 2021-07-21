import "./styles/main.scss";

var goTopBtn = document.getElementById("gotobtn");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) goTopBtn.style.display = "block"; 
  else goTopBtn.style.display = "none";
}

function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}