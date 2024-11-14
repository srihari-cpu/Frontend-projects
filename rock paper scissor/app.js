// let userscore = 0;
// let compscore = 0;

// //accessing the elements from HTML
// const choices=document.querySelectorAll(".choice");
// // const msg=document.querySelector("#msg");
// // const userscorep=document.querySelector("#user-score");
// // const compscorep=document.querySelector("#comp-score")

// //random value generation fun
// const gencompchoice = () => {
//     const options = ["rock","paper","scissor"];
//     const idx=Math.floor(Math.random()*3);
//     return options[idx];
// }

// //draw function
// const drawgame = () => {
//     // console.log("Game was Draw.play again");
//     msg.innerText=`Game was Draw.Play again`;
//     msg.style.backgroundColor="#081b31";
// };

// //comparision fun
// const showwinner = (userwin,userchoice,compchoice) =>  {
//     if(userwin){
//         // console.log("You win!");
//         msg.innerText=`You Win! Yours ${userchoice} beats  ${compchoice}`;
//         msg.style.backgroundColor="green";
//         userscore++;
//         userscorep.innerText=userscore;
//     }
//     else{
//         // console.log("You lose.")
//         msg.innerText=`You Lose. ${compchoice} beats ${userchoice}`;
//         msg.style.backgroundColor="red";
//         compscore++;
//         compscorep.innerText=compscore;
//     }
// }

// //checking actual logic here
// const playgame = (userchoice) => {
//     // console.log("user choice = ",userchoice);
//     let compchoice=gencompchoice();
//     // console.log("comp choice = ",compchoice);

//     if (userchoice === compchoice){
//         //draw function call
//         drawgame();
//     }else{
//         let userwin=true;
//         if(userchoice === "rock"){
//             //paper,scissor
//             userwin =compchoice === "paper" ?false:true;
//         }else{
//             if(userchoice === "paper"){
//                 //scissor,rock
//                 userwin = compchoice==="scissor"?false:true;
//             }else{
//                 if (userchoice=== "scissor"){
//                     //rock,paper
//                     userwin=compchoice==="rock"?false:true;
//                 }
//             }
//         }
//         showwinner(userwin,userchoice,compchoice);
//     }
// };

// //adding event listener for all the option
// choices.forEach((choice) => {
//     choice.addEventListener("click",() =>{
//         const userchoice=choice.getAttribute("id");
//         playgame(userchoice)
//     })
// });

let userscore = 0;
let compscore = 0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorep=document.querySelector("#user-score");
const compscorep=document.querySelector("#comp-score");


const drawgame=()=>{
    console.log("Game was Draw.")
    msg.innerText="Game was Draw."
    msg.style.backgroundColor="#081b31";
};

const gencompchoice=()=>{
    const options=["rock","paper","scissor"];
    let idx=Math.floor(Math.random()*3);
    return options[idx];
};

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        console.log(`You win`);
        msg.innerText=`You win!. your's ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
        userscore++;
        userscorep.innerText=userscore;

    }else{
        console.log("you lose");
        msg.innerText=`You Lose. comp's ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
        compscore++;
        compscorep.innerText=compscore;
    }
};


const playgame=(userchoice)=>{
    console.log("choice was clicked ",userchoice);
    const compchoice=gencompchoice();
    console.log("computer choice is ",compchoice);
    if(userchoice===compchoice){
        drawgame();
    }else {
        userwin=true;
        if(userchoice==="rock"){
            //paper,scissor
            userwin=compchoice==="paper"?false:true;
        }else{
            if(userchoice==="paper"){
                //scissor,rock;
                userwin=compchoice==="scissor"?false:true;
            }
            else{
                if(userchoice==="scissor"){
                    //rock,paper
                    userwin=compchoice==="rock"?false:true;
                }
            }
        }
        showwinner(userwin,userchoice,compchoice);
    }
};


//adding event listener for all the option
choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice)
    })
});
