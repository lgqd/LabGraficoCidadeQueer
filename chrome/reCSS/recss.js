/*
  https://certsimple.com/blog/localhost-ssl-fix
*/

var mstyle = null;

function changeStyle(newStyle) {
  if(mstyle === null) {
    initStyleVar();
  }
  mstyle.innerHTML = newStyle;
}

function httpGetAsync(theUrl, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() { 
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      callback(xmlHttp.responseText);
  }
  xmlHttp.open("GET", theUrl, true); // true for asynchronous 
  xmlHttp.send(null);
}

function initStyleVar() {
  mstyle = document.createElement("style");
  mstyle.setAttribute("class", "LGQ");
  document.getElementsByTagName('head')[0].appendChild(mstyle);  
}

window.onload = initStyleVar;

document.onclick = function(e) {
  httpGetAsync("https://cleis.local:8080/css.css", changeStyle);
};
