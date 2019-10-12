document.addEventListener('DOMContentLoaded', function() {
  window.onscroll = function () { myFunction() };

  function myFunction() {
    let el = document.getElementsByClassName('navbar')[0];
    let newEl = document.getElementById('welcome');
    let el2 = document.getElementById('floatingNav');

    if (document.documentElement.scrollTop > newEl.offsetHeight / 7) {
      el2.style.transform = "translateY(-20px)"
      el2.style.width = "100%"
      el2.style.border = "0.5px solid rgba(246, 246, 246, 0)";
      el2.style.background = "rgba(20, 20, 20, 1)";
    } else {
      el2.style.width = "95%"
      el2.style.border = "0.5px solid rgba(246, 246, 246, 0.2)";
      el2.style.transform = "translateY(20px)"
      el2.style.background = "rgba(20, 20, 20, 0.2)";
    }
    if (document.documentElement.scrollTop > newEl.offsetHeight / 2) {
    }
    else {
    }
  }
 });