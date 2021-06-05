
const upvotebtn= document.querySelector(".upvote");
let upvoteIcon = document.querySelector(".icon");
let count = document.querySelector(".count");


let clicked = false;

upvotebtn.addEventListener('click',()=>{
    if(!clicked) {
        clicked = true;
        upvoteIcon.innerHTML='<i class="fas fa-arrow-up"></i>'
        
        count.textContent++;
    }
    else{
        clicked=false;
      upvoteIcon.backgroundcolor='<i class="icon" class="fas fa-arrow-up"></i> '
        count.textContent--;
    }
})


