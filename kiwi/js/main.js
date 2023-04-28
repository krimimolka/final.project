// ###### navbar ##########3

let nav = document.querySelector(".navigation-wrap");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}


// ###### nav bar ############

let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show")
    })
})

// like function
var likeButton = document.querySelectorAll(".bi bi-heart");

for (let btn of likeButton) {
  btn.addEventListener("click", function () {
    var color = btn.getAttribute("fill");
    console.log(color);
    if (color == "grey") {
      btn.setAttribute("fill", "red");
    } else {
      btn.setAttribute("fill", "grey");
    }
  });
}

var btn_plus = document.querySelectorAll(".plus");
var btn_minus = document.querySelectorAll(".minus");

var Total = document.getElementById("total");

// add Button Funtion
for (let btn of btn_plus) {
    btn.addEventListener("click", function () {
      var itemName = btn.getAttribute("name");
      var itemQty = document.getElementById(itemName + "_Qty");
      var itemPrice = document.getElementById(itemName + "_price");
      itemQty.innerHTML = +itemQty.innerHTML + 1;
      Total.innerHTML = +Total.innerHTML + +itemPrice.innerHTML;
    });
  }
  
// Minus Button Function

for (let btn of btn_minus) {
    btn.addEventListener("click", function () {
      var itemName = btn.getAttribute("name");
      var itemQty = document.getElementById(itemName + "_Qty");
      var itemPrice = document.getElementById(itemName + "_price");
      if (+itemQty.innerHTML !== 0) {
        itemQty.innerHTML = +itemQty.innerHTML - 1;
        Total.innerHTML = +Total.innerHTML - +itemPrice.innerHTML;
      }
    });
  }




