var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


// $("#ouractions").click(function(){
//   $(".cases").hide();
// });
// $("#ouractions").click(function(){
//   $("#whyuss").hide();
// });


$('#ouractions').click(function () {
$('.cases').hide();
$('#whyuss').hide();
$(".w3-content w3-display-container").hide();
$('#actionsLink').slideDown();
});