
// $(".butts").hide()
// $(".input").hide ()
// $("#sub-btn").hide()
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

var informationList = JSON.parse(localStorage.getItem('information-list'))
for (var i = 0; i < informationList.length; i++){
    $(".ghassen").append(` <div class="clientinfo"> <h2>${informationList[i].name} is intrested in this one </h2> <h2 class="client">  </h2>    <h2 class="clientinfo"> <h2> Email: </h2> <h2 class="infor">${informationList[i].email}</h2>  <h2> Phone number: </h2> <h2> ${informationList[i].phone} </h2> </div>`);
}

$('.ghassen').hide()
$('#notif').click(function () {
$(".infoadmin").hide();
$("#login").hide();
$(".ghassen").slideDown();
});

$('.addcase').hide()
$('#newcase').click(function () {
$(".infoadmin").hide();
$("#login").hide();
$("#notif").hide();

$(".addcase").slideDown();
});
$("#global").hide()

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

var admin= ["echarity@gmail.com",12345]


// $('#login').click(function () {
       
         // var localData = JSON.parse.getItem(admin)
         
        
         // var usernamelog = $('#userlink').val();
         // var userpasswordlog = $('#pswlink').val();


         // if (usernamelog === JSON.parse(admin[0]) && userpasswordlog === admin[1]) {
         //     alert('You are logged in.');}

             // $("#admindiv").hide()
            // $('.buttons').show()
            // $('.addcase').show()
      
    // })