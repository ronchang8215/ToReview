$(document).ready(function(){
    $("#click1").click(function(){
    $("#click1").children(".plus").toggle();
    $("#click1").children(".minus").toggle();
    $("#moviec").slideToggle();
  });
    $("#click2").click(function(){
    $("#click2").children(".plus").toggle();
    $("#click2").children(".minus").toggle();
    $("#dramac").slideToggle();
  });
    $("#click3").click(function(){
    $("#click3").children(".plus").toggle();
    $("#click3").children(".minus").toggle();
    $("#animec").slideToggle();
  });
  mediafunction();
});

// When the user clicks anywhere outside of the modal, close it

function closeform1(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

function closeform2(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

window.onclick=function(){closeform1(event);closeform2(event);}

function opencontent(x) {
    if(document.getElementById(x).style.left === "-100%") {
      document.getElementById(x).style.left = "0%";
    }
    else {
      document.getElementById(x).style.left = "-100%";
    }
}

 /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
      
function openNav() {
    document.getElementById("mySidenav").style.left = "0px";
    document.getElementById("main").style.marginLeft = "250px";
}

function openNav1() {
    document.getElementById("mySidenav").style.left = "0px";
    document.getElementById("main").style.marginLeft = "0px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.left = "-250px";
    document.getElementById("main").style.marginLeft = "0";
}
    
// var x = window.matchMedia("(max-width: 640px)");      
function mediafunction(){
  var y = document.getElementById("open");
    if ($(window).width() < 640) { // If media query matches
      y.onclick = openNav1;
      document.getElementById("mySidenav").style.opacity = "1";
      $(".newarticle").attr("target","_blank");
  } else {
      y.onclick= openNav;
      document.getElementById("mySidenav").style.opacity = "0.9";
  }
}
// mediafunction(x) 
// Call listener function at run time
window.addEventListener("mousemove",mediafunction);
// Attach listener function on state changes
      
var modal1 = document.getElementById("id01");
var modal2 = document.getElementById("id02");
 