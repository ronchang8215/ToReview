function tab(evt,number) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("discusspage");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("a");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(number).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();