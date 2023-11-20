//carousel script debut
var content_carousel=document.querySelectorAll('.image');
var prev=document.querySelectorAll('#gauche');
var next=document.querySelectorAll('#droite');
let translate=0;
prev[0].addEventListener('click',()=>{
    translate+=100;
    if(translate>0){
        translate=0;
    }
    content_carousel[0].style.transform='translatex('+translate+'%)';
});
next[0].addEventListener('click',()=>{
    translate-=100;
    if(translate<-300){
        translate=-300;
    }
    content_carousel[0].style.transform='translatex('+translate+'%)';
});
prev[1].addEventListener('click',()=>{
    translate+=100;
    if(translate>0){
        translate=0;
    }
    content_carousel[1].style.transform='translatex('+translate+'%)';
});
next[1].addEventListener('click',()=>{
    translate-=100;
    if(translate<-300){
        translate=-300;
    }
    content_carousel[1].style.transform='translatex('+translate+'%)';
});
// fin carousel script

// Menu humberger
var tog=document.querySelector('#bare');
var res=document.querySelector('.menu-hamburger');
var ferme=document.querySelector('#close');
tog.addEventListener('click',()=>{
    res.classList.add("active");

    // if(res.style.left =='0'){
    //     res.style.left ='-250';
    // }
    // else{
    //     res.style.left ='0';
    // }
    
    
})
ferme.addEventListener('click',()=>{
    res.classList.remove("active");
})      
// var res=document.querySelector('.menu-hamburger');
// ferme.addEventListener('click',()=>{
//     if(res.style.left =='-250'){
//         res.style.left ='0';
//     }
//     else{
//         res.style.left ='-250';
//     }
    
// })
//pop-up formulaie de reservation
var pope=document.querySelector('.popup');
var forme=document.querySelector('.formulaire');
pope.addEventListener('click',()=>{
    if(forme.style.display=='block'){
        forme.style.display='none';
    }
    else{
        forme.style.display='block'
    }
})
var btn=document.querySelector('.bouton-form');
btn.addEventListener('click',()=>{
    if(forme.style.display=='block'){
        forme.style.display='none';
    }
    else{
        forme.style.display='block'
    }
})