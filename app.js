let boxes  = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turn0 = true;

const  winPatterns = [

[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]

];

boxes.forEach((box)=>{

    box.addEventListener("click" , ()=>{
        console.log("clicked");

        if(turn0){
            box.innerText="0";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;

        checkWinner();
    });
});


const resetGame = ()=>{
    turn0 = true;
    enableBoxes();
    msgcontainer.classList.add("hide");

}

const disableBoxes = ()=>{

    for(let box of boxes){
        box.disabled = true;
    }

}

const enableBoxes = ()=>{

    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }

}

const showWinner = (winner)=>{

    msg.innerText=`Congratulations winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();



}


const checkWinner = ()=>{

    for(let pattern of winPatterns){

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1!='' && pos2!='' && pos3!=''){

            if(pos1==pos2 && pos2==pos3){
                console.log("Winnner");
                showWinner(pos1);
            }

        }

    }
}

let newBtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);


