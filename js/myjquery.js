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

var modal1 = document.getElementById("id01");
var modal2 = document.getElementById("id02");

function closeform1(e) {
  if (e.target === modal1) {
    modal1.style.display = "none";
  }
}

function closeform2(e) {
  if (e.target === modal2) {
    modal2.style.display = "none";
  }
}

window.addEventListener("click",closeform1,false);
window.addEventListener("click",closeform2,false);

function opencontent(x) {
  if(document.getElementById(x).style.left === "-100%") {
    document.getElementById(x).style.left = "0%";
  }
  else {
    document.getElementById(x).style.left = "-100%";
  }
}

      
function openNav() {
  document.getElementById("mySidenav").style.left = "0px";
  document.getElementById("main").style.marginLeft = "250px";
}

function openNav1() {
  document.getElementById("mySidenav").style.left = "0px";
  document.getElementById("main").style.marginLeft = "0px";
}

function closeNav() {
  document.getElementById("mySidenav").style.left = "-250px";
  document.getElementById("main").style.marginLeft = "0";
}
          
function mediafunction(){
  var y = document.getElementById("open");
    if ($(window).width() < 640) { // If media query matches
      y.onclick = openNav1;
      document.getElementById("mySidenav").style.opacity = "1";
      $(".newarticle").attr("target","_blank");
      $("#side").hide();
  } else {
      y.onclick= openNav;
      document.getElementById("mySidenav").style.opacity = "0.9";
      $("#side").show();
  }
}
 
window.addEventListener("mousemove",mediafunction);
 