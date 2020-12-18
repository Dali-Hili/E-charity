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
        if(Array.isArray(newData)){
          newData.push(information)
           localStorage.setItem('information-list', JSON.stringify(newData))
        }
        else{
          newData = [];
          newData.push(information);
           localStorage.setItem('information-list', JSON.stringify(newData))

        }

        
        

       }     
$("#sub-btn").click(addinfo)


$(document).ready(function(){

$(".casesbutton").on("click",function(){
 $(".cases").hide()
 $('#whyuss').hide()
 $('#whyusimg').hide()
 $('#actions').hide()
 $('.partn').hide()
 $('#contact').hide()
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
for (var i = 0; i < informationList.length; i++){
    $(".ghassen").append(` <div class="notif"> <h2 class="client">${informationList[i].name} is intrested in this one </h2> <h2 class="client"> ${informationList[i].name} </h2>    <h2 class="client">${informationList[i].email}</h2>  <h2 class="client">  ${informationList[i].phone} </h2> </div>`);
}

$('.notif').hide()
$('#notif').click(function () {
$(".infoadmin").hide();
$("#login").hide();
// $().hide();
$(".notif").slideDown();
});

$('.addcase').hide()
$('#newcase').click(function () {
$(".infoadmin").hide();
$("#login").hide();
$("#notif").hide();
$(".addcase").slideDown();
});

var jdidi= []
var addcase=function() {

  // event.preventDefault()
  
  var cases={
    photo:$("#photolink").val(),
    description:$("#discription").val()
  
  }
     jdidi.push(cases)
      document.forms[0].reset()
        var oldcase=localStorage.getItem('cases-list');
        var newcase = JSON.parse(oldcase) 
      if(Array.isArray(newcase)){
      newcase.push(cases)
      localStorage.setItem('cases-list', JSON.stringify(newcase))
       }
       else {
        newcase=[]
         newcase.push(cases);
           localStorage.setItem('cases-list', JSON.stringify(newcase))
       }
    
      

       }
  
$("#post").click(addcase)
