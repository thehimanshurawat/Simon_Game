let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let btns = ["red" , "yellow" , "green" ,  "purple"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        started = true;
        levelup();
    }
});

function btnFlash (btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    } , 100)
};

function levelup (){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    btnFlash(randBtn);
};
let highScore = 0; 
function checkAns (idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup(),1000);
        }
    }else{
        if (highScore<level){
            highScore = level;
        }
        
        let p = document.querySelector("p");
        p.innerText = highScore;
        
        h2.innerHTML= `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor = "white";
        },150)
        reset();
    }
    
};

function btnPress () {
    let btn = this;
    btnFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
};

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnPress)
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level =0;
}