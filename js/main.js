"use strict"
let t = true; 
let mybar = document.querySelector(".bar .left");

let mylist = document.querySelector(".list-2")

mybar.onclick = function() {
    if(!(t)){
        mylist.style.display =`block`;
        t = true ; 
    }else{
        mylist.style.display =`none`;
        t = false ; 
    }
}


//random backgroun 
let myimage = document.querySelectorAll(".section .imgae .image");
let back = 0; 
let cout = setInterval(function(){
    if(back === 0){
        myimage[back].classList.toggle("active");
        back = back + 1 ; 
    }
    else if (back === 1 ){
        myimage[back].classList.toggle("active");
        back = back + 1 ; 
    }
    else {
        myimage[back].classList.toggle("active");
        back = 0 ; 
    }
},2000);
let go = 0 ; 
let myword = document.querySelectorAll(".section .section-2 span");
console.log(myword[0])

let cout1 = setInterval(function(){
    if(go === 0){
        myword[0].classList.add("active");
        myword[go + 1].classList.remove("active");
        myword[go + 2].classList.remove("active");
    }
    else if (go === 1 ){
        myword[go].classList.add("active");
        myword[go + 1].classList.remove("active");
        myword[go - 1 ].classList.remove("active");
    }
    else {
        myword[go].classList.add("active");
        myword[go - 1].classList.remove("active");
        myword[go - 2].classList.remove("active");
        go = 0 ; 
    }
    
        go = go + 1 ; 
},3000);