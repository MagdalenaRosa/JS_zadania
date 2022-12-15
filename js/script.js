"use strict";

const tab=[[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5],[1,2,3,4,5]];

for(var i =0;i<tab.length;i++){
    console.log(tab.join("\n"));
}
 const imiona=["Jan","Jadwiga","Joanna","Anna","Ada","Adam","Alex","Alice","Alozjzy","Artur","Janek"];
 function names(){
     let text="";
     for (let i = 1; i < imiona.length; i++) {
         text +=`${i}. `+imiona[i] + "<br>";
       }
       document.getElementById("tablica_imion").innerHTML = text;
 }
 names()


for(var i=1; i<=5; i++){
    var s;
    for(s=0; s<i; s = s+1){
     document.write("*");
    }
    document.write("<br>");
 
 }
document.write("<br>");

for(var i=5; i>=0; i= i-1){
   var s;
   for(s=0; s<i; s = s+1){
    document.write("*");
   }
   document.write("<br>");

}

