//1=rocks
//2=paper
//3=scissors
let play_new=document.getElementById("play");
let button_container = document.getElementById('button_container');
let playbtn=document.getElementById("playclass");
let computer=0;
let user=0;
let left=document.getElementById("left_fist");
let right=document.getElementById("right_fist");
let hands=document.getElementById("hand_container");
let comp_score=document.getElementById("comp_score");
let user_score=document.getElementById("user_score");
 let rockbtn=document.getElementById("rock");
 let paperbtn=document.getElementById("paper");
 let scissorsbtn=document.getElementById("scissors");
 let choose_fate=document.getElementById("choose_fate");
function shake(){
    left.style.transition="all 2s"
    right.style.transition="all 2s"
    hands.style.display = "block";
    left.style.marginTop="40px";
    right.style.marginTop="40px";  
    left.style.animation=" fadeInAnimation 2s ease 0s " 
    right.style.animation=" fadeInAnimation 2s ease 0s " 
    user=0;
    computer=0;
    user_score.textContent=0;
    comp_score.textContent=0;
    choose_fate.style.animation="bouncing2 .5s ease 0s infinite alternate both";
    choose_fate.style.fontSize="100%";
    choose_fate.textContent="choose your fate";
    choose_fate.style.textShadow="3px 1px 0px rgba(247, 200, 9, 0.987);";
    left.src="left_fist.png";
    right.src="right_fist.png";
    setTimeout(()=>{
    rockbtn.style.animation = "";
    paperbtn.style.animation = "";
    scissorsbtn.style.animation = "";
    },2000)
    
}
function right_Hand(user_choice){
    if(user_choice == 1)
        {
            right.src="right_fist.png";
        }
        if(user_choice == 2)
            {
                right.src="right_paper.png";
            }
        if(user_choice == 3)
                {
                    right.src="right_scissor.png";
                }
}
function changesMaking(randomNumber,user_choice){
        left.style.animation="none"
        right.style.animation="none"
        if(randomNumber == 2)
        {
            left.src="left_paper.png";
            right_Hand(user_choice);
        }
        if(randomNumber == 1)
            {
                left.src="left_fist.png";
                right_Hand(user_choice);
            }
            if(randomNumber == 3)
                {
                    left.src="left_scissor.png";
                    right_Hand(user_choice);
                } 
                if(user == 5 || computer == 5) {
                    hands.style.display="none";
                    button_container.style.display="none";
                    choose_fate.style.fontSize="40px";
                    choose_fate.style.animation="bounce2 1.5s  0s 1 alternate both ";
                    playbtn.style.display="block";
                    playbtn.style.animation="fadeInAnimation 5s ease 0s";
                    
                    play_new.textContent = "play again";
                    if(user>computer)
                        choose_fate.textContent="you win!"
                    else
                    choose_fate.textContent="you loose!"
                }
}
function rock(){
    left.style.animation="example .3s  0s 4 alternate both "
    right.style.animation="example .3s  0s 4 alternate both "
    setTimeout(()=>{let randomgen=Math.ceil(Math.random()*3);
        if(randomgen == 2){
            computer= computer+1;
            comp_score.textContent = computer;
            choose_fate.textContent="computer wins"
        }
        if(randomgen == 3)
            {
                user= user+1;
                user_score.textContent=user;
                choose_fate.textContent="user wins"
            }
            if(randomgen == 1)
                {
                    choose_fate.textContent="Tie"
                }
                left.style.animation="example .3s  0s 4 alternate both "
                right.style.animation="example .3s  0s 4 alternate both "
            changesMaking(randomgen,1);},1200)
}
function scissors(){
    left.style.animation="example .3s  0s 4 alternate both "
     right.style.animation="example .3s  0s 4 alternate both "
     setTimeout(()=>{let randomgen=Math.ceil(Math.random()*3);
        if(randomgen == 1){
            computer= computer+1;
            comp_score.textContent = computer;
            choose_fate.textContent="computer wins"
        }
        if(randomgen == 2)
            {
                user= user+1;
                user_score.textContent=user;
                choose_fate.textContent="user wins"
            }
            if(randomgen == 3)
                {
                    choose_fate.textContent="Tie"
                }
                
                changesMaking(randomgen,3);},1200)
    
            
}
function paper(){
    left.style.animation="example .3s  0s 4 alternate both "
    right.style.animation="example .3s  0s 4 alternate both "    
    setTimeout(()=>{let randomgen=Math.ceil(Math.random()*3);
        if(randomgen == 3){
            computer= computer+1;
            comp_score.textContent = computer;
            choose_fate.textContent="computer wins"
        }
        if(randomgen == 1)
            {
                user= user+1;
                user_score.textContent=user;
                choose_fate.textContent="user wins"
            }
            if(randomgen == 2)
                {
                    choose_fate.textContent="Tie"
                }
                    changesMaking(randomgen,2);},1200)
}
function play_start(){
    let score_container = document.getElementById("score_container");
   let button_container=document.getElementById("button_container");
    playbtn.style.animation="fadeOutAnimation 1s ease 0s";
    setTimeout(() =>{playbtn.style.display = "none";
    choose_fate.style.display="block";
    button_container.style.display = "block";
    score_container.style.display = "block";
    rockbtn.style.animation = "bouncing 1s ease 0s 1 alternate both";    
    paperbtn.style.animation = "bouncing 1s ease 0s 1 alternate both";
    scissorsbtn.style.animation = "bouncing 1s ease 0s 1 alternate both";
    shake();},1000)
}