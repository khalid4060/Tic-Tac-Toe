import React, { useRef, useState } from 'react'

const Grid = () => {
    const [grid, setGrid] = useState([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
     const inpuref = useRef([
       [0, 0, 0],
       [0, 0, 0],
       [0, 0, 0],
     ]);
    const [input, setinput] = useState("X")
    const handleClick = (row, col) => {
       // console.log(inpuref.current);
        inpuref.current[row][col].innerText = input
      if (input === "X") {
        setinput("O");
      } else {
        setinput("X");
      }
        
    }
    function winner() {
        
        const win = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (const i of win) {
              
            const [a, b, c] = i
            console.log(a,b,c)
            if (inpuref.current[Math.floor(a / 3)][a % 3].innerText && inpuref.current[Math.floor(a / 3)][a % 3].innerText === inpuref.current[Math.floor(b / 3)][b % 3].innerText && inpuref.current[Math.floor(a / 3)][a % 3].innerText === inpuref.current[Math.floor(c / 3)][c % 3].innerText) {

                inpuref.current[Math.floor(a / 3)][a % 3].setAttribute(
                  "class",
                  "won-row"
                )
                 inpuref.current[Math.floor(b / 3)][b % 3].setAttribute(
                   "class",
                   "won-row"
                 );
                 inpuref.current[Math.floor(c/ 3)][c % 3].setAttribute(
                   "class",
                   "won-row"
                 );
                return true
            }
        }
        return false

    }

    const iswin = winner()
    

    console.log(iswin)
    return (
      <>
        <div className="body">
          <h1>Tic Tac Toe</h1>
          <div className="Conatiner">
            {grid.map((row, rowidx) => {
              return row.map((col, colidx) => {
                return (
                  <div
                    className="Cell"
                    ref={(ref) => {
                      //console.log(inpuref.current,row,col)
                      inpuref.current[rowidx][colidx] = ref;
                    }}
                    onClick={() => {
                      inpuref.current[rowidx][colidx].innerText === "" &&
                        !iswin &&
                        handleClick(rowidx, colidx);
                    }}
                  ></div>
                );
              });
            })}
          </div>
          {iswin && (
            <div>
              <h1>{input === "X" ? "O" : "X"} Won!!!!!!!!</h1>
            </div>
          )}
        </div>
      </>
    );
}

export default Grid