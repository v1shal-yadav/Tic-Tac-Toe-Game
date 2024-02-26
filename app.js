let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turnO = true; // playerX, player0

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked"); 
        if(turnO){
            box.innerText = "O"; 
            turnO = false; 
        }
        else {
            box.innerText = "X"; 
            turnO = true; 
        }
        box.disabled = true; 

        checkWinner(); 
    });
});

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innrText; 
        let pos2Val = boxes[pattern[1]].innrText; 
        let pos3Val = boxes[pattern[2]].innrText; 

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val == pos3Val) {
                console.log("winner");
            }
        }
    }
}
