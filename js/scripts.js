// ---------- Responsive ----------
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// ---------- GET query variable ----------
/* https://css-tricks.com/snippets/javascript/get-url-variables/ */
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return (false);
}
var p = getQueryVariable("p"); // --> funding
//var p_filename = p + ".html"; // --> funding.html

function activateNaviButton(param) {
  // ---------- GET query variable for p ----------
  var query = window.location.search.substring(param); // --> ?p=funding
  var file_w_param = "t1.html" + query // --> t1.html?p=home
  file_w_param = file_w_param.match(/^[a-z][0-9]\.html\?p=[a-z]*/);

  // ---------- Make navi button active ----------
  var url = window.location.pathname;
  //var filename = url.substring(url.lastIndexOf('/') + 1); // --> page.html
  // Get the container element
  var btnContainer = document.getElementById("myTopnav");
  // Get all buttons with class="btn" inside the container
  var btns = btnContainer.getElementsByClassName("btn");

  // Loop through the buttons and add the active class to the current/clicked button
  var cur_url, cur_path, cur_file;
  for (var i = 0; i < btns.length; i++) {
    cur_url = btns[i]; // --> http://localhost/pages/page.html?p=funding
    cur_path = cur_url.getAttribute("href"); // --> /pages/page.html?p=funding
    cur_file = cur_path.substring(cur_path.lastIndexOf('/') + 1); // --> page.html?p=funding
    if (cur_file == file_w_param) {
      cur_url.className += " active";
    }
  }
}
activateNaviButton(p);

// Use filename for include
function callInclude(param) {
  include_content = "<div w3-include-html=\"/content/" + param + ".html\"></div>"
  document.getElementById("include").innerHTML = include_content;
}
callInclude(p);
