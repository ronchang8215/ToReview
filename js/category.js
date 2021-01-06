function rightblock(){
document.getElementById("rightbottom").style.marginRight ="0px";
document.getElementById("main").style.marginRight="250px";
}

function rightblockclose(){
document.getElementById("rightbottom").style.marginRight ="-250px";
document.getElementById("main").style.marginRight="0px";
}
      
function appear(movieName) {
    var i, movietitle, slideimg;
    movietitle = document.getElementsByClassName("movietitle");
    for (i = 0; i < movietitle.length; i++) {
        movietitle[i].style.display = "none";
    }
    document.getElementById(movieName).style.display = "block";
}

function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
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
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("LI");
    //Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*check if the next item should
      switch place with the current item:*/
      
      if (Number(b[i].dataset.date) < Number(b[i + 1].dataset.date)) {
        /*if next item is numerically
        lower than current item, mark as a switch
        and break the loop:*/
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark the switch as done:*/
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
    //Loop through all list-items:
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
      
filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("work");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
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

// Add active class to the current button (highlight it)
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
      