


let mybtn = document.getElementById ("btn");

console.log(mybtn)
let menu = document.getElementById ("na");
console.log(menu);

mybtn.addEventListener("click", _showMenu);
function _showMenu(){
   if(menu.style.display === "block"){
       menu.style.display = "none"
   }else{
       menu.style.display = "block"
   }
    
}

//Show hamburger menu on Mobile version under 650 width and hide it in more than 769 width

window.addEventListener("resize", _checkWidth);
function _checkWidth() {
     
         if(window.innerWidth <= 651) {
             mybtn.style.display = "block";
         }else{
             mybtn.style.display ="none";
         }
     }
     

//Show sliver nav menu on Mobile version under 650 width and hide it in more than 650 width
     let nav1 = document.getElementById("hide");
     let ooo = document.getElementById("hidee");
     console.log(nav1);

     window.addEventListener("resize", _Width);
function _Width() {
     
         if(window.innerWidth <= 651) {
             nav1.style.display = "block";
         }else{
             nav1.style.display ="none";
         }
     }
console.log(ooo)