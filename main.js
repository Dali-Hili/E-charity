$(".input").hide ()
$("#sub-btn").hide()
var info =[]
var addinfo=function(event) {
	event.preventDefault()
	var information={
		name:$("#name").val(),
		email:$("#email").val(),
		phone:$('#phone').val()
	}
	   info.push(information)
	    document.forms[0].reset()
       localStorage.setItem('information-list', JSON.stringify(info))
       }
$("#sub-btn").click(addinfo)


$(document).ready(function(){

$(".casesbutton").on("click",function(){
 $(".cases").hide()
 $('#whyuss').hide()
 $('#whyusimg').hide()
 $('#actions').hide()
 $(".input").slideDown()
 $("#sub-btn").show()
})
})


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

// our actions button

$('#ouractions').click(function () {
$('.cases').hide();
$('#whyuss').hide();
$("#whyusimg").hide();
$('#actions').slideDown();
});

//why us button

$('#whyus').click(function () {
$('#actions').hide();
$('#allcases').hide();
$("#whyusimg").hide();
$('#whyuss').slideDown();

});
