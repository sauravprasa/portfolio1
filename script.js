// jQuery(document).ready(function($) { 
//     $(function()
//     {
//         $(".circle-hover").hover(function()
//         {
//             $(".cir-11").addClass("hover-visible");
//             $(".link-name").addClass("link-name-visible");
//         }, function()
//         {

//         });
//     });
//   });  


window.sr = ScrollReveal();
sr.reveal('.reveal', { duration: 6000 });

(function() {

  'use strict';
  var items = document.querySelectorAll(".timeline li");
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

})();


