function rightblock(){
document.getElementById("rightbottom").style.marginRight ="0px";
document.getElementById("main").style.marginRight="250px";
}

function rightblockclose(){
document.getElementById("rightbottom").style.marginRight ="-250px";
document.getElementById("main").style.marginRight="0px";
}
      
function appear(movieName) {
    var i, movietitle;
    movietitle = document.getElementsByClassName("movietitle");
    for (i = 0; i < movietitle.length; i++) {
        movietitle[i].style.display = "none";
    }
    document.getElementById(movieName).style.display = "block";
}

function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

var list, i, switching, b, shouldSwitch;
list = document.getElementById("myUL");
      
function sortListtime() {
switching = true;
  while (switching) {
    switching = false;
    b = list.getElementsByTagName("LI");
    for (i = 0; i < (b.length - 1); i++) {
      shouldSwitch = false;
      if (Number(b[i].dataset.date) < Number(b[i + 1].dataset.date)) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}

function sortListhot() 
{
switching = true;
  while (switching) 
  {
    switching = false;
    b = list.getElementsByTagName("LI");
    for (i = 0; i < (b.length - 1); i++) 
    {
      shouldSwitch = false;
      if (Number(b[i].dataset.hot) < Number(b[i + 1].dataset.hot)) 
      {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) 
      {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
      }
  }
}
      
filterSelection("all") 
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("work");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}


function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}


function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1); 
    }
  }
  element.className = arr1.join(" ");
}


var btnContainer1 = document.getElementById("divide");
var btnContainer2 = document.getElementById("languagedivide");
var btn1 = btnContainer1.getElementsByTagName("a");
var btn2 = btnContainer2.getElementsByTagName("a");
for (var i = 0; i < btn1.length; i++) {
  btn1[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("a active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
for (var i = 0; i < btn2.length; i++) {
  btn2[i].addEventListener("click", function addactive(){
    var current = document.getElementsByClassName("b active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
      