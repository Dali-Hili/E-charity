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
        var olddata=localStorage.getItem('information-list');
        var newData = JSON.parse(olddata) 
        newData.push(information)
 console.log(JSON.parse(localStorage.getItem('information-list')))
 localStorage.setItem('information-list', JSON.stringify(newData))
       }    
$("#sub-btn").click(addinfo)


$(document).ready(function(){

$(".casesbutton").on("click",function(){
 $(".cases").hide()
 $('#whyuss').hide()
 $('#whyusimg').hide()
 $('#actions').hide()
 $('.partn').hide()
 $(".input").slideDown()
 $("#sub-btn").show()
})
})




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

var informationList = JSON.parse(localStorage.getItem('information-list'))
if (information===null){
  
}
for (var i = 0; i < informationList.length; i++){
    $(".ghassen").append(` <div class="notif"> <h2>${informationList[i].name} is intrested in this one </h2> <h2> ${informationList[i].name} </h2>    <h2>${informationList[i].email}</h2>  <h2>  ${informationList[i].phone} </h2> </div>`);
}