var btn = document.getElementById("getLink");
var link = "https://drive.google.com/uc?id=";

var output = document.getElementById("output");

btn.addEventListener("click", function() {
  var your = document.getElementById("yourId").value;
 /* let a = your.slice(32, your.length);
  var removeAfter = a.indexOf("/");
  var final = a.substring(0, removeAfter);
  var fullLink = link + final;

  output.innerHTML = `<a id="btn2" href ="${fullLink}">${fullLink}</a>`;
*/

if (your.length<=33) {
  var id =link+your;
  output.innerHTML = `<a id="btn2" href ="${id}">${id}</a>`;
 
  
} else {
  
  let a = your.slice(32, your.length);
  var removeAfter = a.indexOf("/");
  var final = a.substring(0, removeAfter);
  var fullLink = link + final;
  
  output.innerHTML = `<a id="btn2" href ="${fullLink}">${fullLink}</a>`;

}

})