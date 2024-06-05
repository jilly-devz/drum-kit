// Code for click
for (let index = 0; index < document.querySelectorAll(".drum").length; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", function () {
        
        let btns = this.innerHTML 
        sound(btns)
        animations(btns)
        
       
    })
    
}

   

   
// Code for keyboard Pressed
document.addEventListener("keypress",function (events) {
    sound(events.key)
    animations(events.anime)
})

function sound(key) {
    switch (key) {
        case "w" :
         let tom1 =  new Audio("sounds/tom-1.mp3");  
         tom1.play();
           break;
        
        case "a" :
        let tom2 =  new Audio("sounds/tom-2.mp3");  
         tom2.play();
           break;
        
         case "s":
        let tom3 =  new Audio("sounds/tom-3.mp3");  
         tom3.play();
            break; 

        case "d":
         let tom4 =  new Audio("sounds/tom-4.mp3");  
         tom4.play();
            break;
        
        case "j" :
        let snare =  new Audio("sounds/snare.mp3");  
         snare.play();
            break;

        case "k" :
        let crash =  new Audio("sounds/crash.mp3");  
         crash.play();
            break;
            
        case "l" :
        let bass =  new Audio("sounds/kick-bass.mp3");  
        bass.play();   
             break;


        default: console.log(btns);
            break;
    }
}
 
//  Code for Animation
function animations(anime) {
   let activeButton = document.querySelector("." +anime)
   activeButton.classList.add("pressed")

   setTimeout(function() {
    activeButton.classList.remove("pressed")
   }, 1000);
}


