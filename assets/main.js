let btn = document.getElementById("btn");
let theName;
btn.addEventListener("click", function fetchName(){
  
  theName=document.getElementById("name").value;
  document.getElementById("fetch").innerHTML=theName;
});
 

