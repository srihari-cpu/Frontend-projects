//asscessing the elements 
let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let msgcontainer=document.querySelector(".msg-container");
let msgcounter=document.querySelector("#msg");
let newbtn=document.querySelector("#new-btn");
let count=0;

//turns of the player1,player2
let turn0 = true;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame=()=>{
    turn0=true;
    enabledboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener(("click"),()=>{
        if (turn0){
            box.innerText="O";
            box.style.color="white";
            turn0=false;
            count++;
        }else{
            box.innerText="X";
            box.style.color="red";
            turn0=true;
            count++;
        }
        box.disabled=true;
        checkwinner();
    })
});

const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enabledboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
};

const showwinner=(winner)=>{
    msg.innerText=`Congratulation, Winner is "${winner}"`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
};

const checkwinner=()=>{
    for(let pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val==pos2val&&pos2val==pos3val){
                showwinner(pos1val);
                
            }
        }
    }
};

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);