const GameController = (Board, Controller) => {

    let arrC = 0;
    let r;
    let c;
    //lopp for array contoller
    while(arrC < Controller.length){

        for(r = 0; r < Board.length; r++){

            for(c = 0; c < Board[r].length; c++){

                if(Board[r][c] == "*"){

                    if(Controller[arrC] === "↓"){

                        Board[r][c] = "";
                        Board[r+1][c] = "*";
                    } else if(Controller[arrC] === "→"){

                        Board[r][c] = "";
                        Board[r][c+1] = "*";
                    } else if(Controller[arrC] === "↑"){

                        Board[r][c] = "";
                        Board[r-1][c] = "*";
                    } else if(Controller[arrC] === "←"){

                        Board[r][c] = "";
                        Board[r][c-1] = "*";
                    }
                    arrC++;
                }
            }
        }
    }

    return Board;
};

let board1 = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "*", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

console.log(GameController(board1,["↑", "←", "↑", "→"] ));

let board2 = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "*", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

console.log(GameController(board2, ["↓", "←", "↑", "→", "→", "↑", "→"]));