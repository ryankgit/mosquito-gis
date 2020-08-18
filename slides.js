// Ryan Kirsch
// Spring 2020
// created to display results of GEOG 499 Mosquito Geospatial Analysis Independent Study
// js for maps.html
// Slideshow adapted from https://www.w3schools.com/howto/howto_js_slideshow.asp

var slideIndex = [1,1,1,1];
var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}
