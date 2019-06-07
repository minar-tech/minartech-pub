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
/*
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
var full_url = cur_url + "?p=" + p;
var p_filename = p + ".html"; // --> funding.html
*/


// ---------- GET query variable for p ----------
// --> ?p=funding
var query = window.location.search.substring('p');
// --> page.html?p=funding
var file_w_param = "page.html" + query


// ---------- Make navi button active ----------
var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/') + 1); // --> page.html
// Get the container element
var btnContainer = document.getElementById("myTopnav");
// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");
// Loop through the buttons and add the active class to the current/clicked button
var cur_url, cur_path, cur_file;
for (var i = 0; i < btns.length; i++) {
  // --> http://localhost/pages/page.html?p=funding
  cur_url = btns[i];
  // --> /pages/page.html?p=funding
  cur_path = cur_url.getAttribute("href");
  // --> page.html?p=funding
  cur_file = cur_path.substring(cur_path.lastIndexOf('/') + 1);
  if (cur_file == file_w_param) {
    cur_url.className += " active";
  }
}
// Use filename for include
include_content = "<div w3-include-html=\"/texts/text_" + filename + "\"></div>"
document.getElementById("include").innerHTML = include_content;
