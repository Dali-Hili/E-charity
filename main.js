

var info =[]
var addinfo=function(event) {
  event.preventDefault()
  var information={
    name:$("#name").val(),
    email:$("#email").val(),
    phone:$('#phone').val()
  }
  if(information.name === "" || information.email=== "" || information.phone === ""){
    alert(`Wrong information`)
  }
  else{
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
 $("#global").slideDown()
})
})




// our actions button

$('#ouractions').click(function () {
$('.cases').hide();
$('#whyuss').hide();
$("#whyusimg").hide();
$(".part").hide();
$('#actions').slideDown();
});

//why us button

$('#whyus').click(function () {
$('#actions').hide();
$('#allcases').hide();
$("#whyusimg").hide();
$(".part").hide();
$('#whyuss').slideDown();

});

//our partners button

// $("#global").hide();
// $('#ourpartners').click(function () {
// $('#actions').hide();
// $('#allcases').hide();
// $("#whyusimg").hide();
// $(".part").hide();
// $('#ourpartners').slideDown();

// Go back button

$("#goback").click(function(){
$(".ghassen").hide();
$("#discription").hide();
$("#photolink").hide();
$("#post").hide()
$(".infoadmin").slideDown();
$("#login").slideDown();
$(".butts").slideDown();
})

// add new post button

// $("#goback").click(function(){
// $(".ghassen").hide();
// $("#discription").hide();
// $("#photolink").hide();
// $("#post").hide()
// $(".infoadmin").slideDown();
// $("#login").slideDown();
// $(".butts").slideDown();
// })


var informationList = JSON.parse(localStorage.getItem('information-list'))
for (var i = 0; i < informationList.length; i++){
    $(".ghassen").append(` <div class="clientinfo"> <h2>${informationList[i].name} is intrested </h2> <h2 class="client">  </h2>    <h2 class="clientinfo"> <h2> Email: </h2> <h2 class="infor">${informationList[i].email}</h2>  <h2> Phone number: </h2> <h2> ${informationList[i].phone} </h2> </div>`);
}

$('.ghassen').hide()
$('#notif').click(function () {
$(".infoadmin").hide();
$("#login").hide();
$("#newcase").hide()
$(".ghassen").slideDown();
});

$(".addcase").hide()
$("#newcase").click(function () {
$(".infoadmin").hide();
$("#login").hide();
$("#notif").hide();
$(".addcase").slideDown();
$("#discription").slideDown();
$("#photolink").slideDown();
$("#post").slideDown();
});



$("#global").hide();

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

function checkAdmin(){
  for(var i=0;i<checkAdmin;i++){
    
  }
}


      
  