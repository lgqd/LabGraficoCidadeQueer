/*
  https://certsimple.com/blog/localhost-ssl-fix
*/

var mStyle = null;

function changeStyle(newStyle) {
  if(mStyle == null) {
    console.log("mStyle is null. Try again.");
    initStyleVar();
  }
  mStyle.innerHTML = newStyle;
}

function httpGetAsync(theUrl, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() { 
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      callback(xmlHttp.responseText);
  }
  xmlHttp.open("GET", theUrl, true);
  xmlHttp.send(null);
}

function setup() {
  initStyleVar();
  setInterval(function() {
    httpGetAsync("https://cleis.local:8080/css.css", changeStyle);
  }, 5000);
}

function initStyleVar() {
  mStyle = document.createElement("style");
  mStyle.setAttribute("class", "LGQ");
  document.getElementsByTagName('head')[0].appendChild(mStyle);
}

window.onload = setup;
