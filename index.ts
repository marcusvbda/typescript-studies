const processWinner = (matrix:(string|null)[][]):string|null => {
    const hasHorizontalWinner = ():string|null => {
        const checkRow = (row:number):string|null => {
          return (matrix[row].every((x) => matrix[row][0] === x) ?  matrix[row][0] : null)
        };
        return checkRow(0) || checkRow(1) || checkRow(2);
      };     
      
      const hasVerticalWinner = ():string|null => {
        const checkColumn = (column:number):string|null => {
          let column_values:(string|null)[] = [
            matrix[0][column],
            matrix[1][column],
            matrix[2][column],
          ];
          return (column_values.every((x) => column_values[0] === x)) ? column_values[0] : null;
        };
        return checkColumn(0) || checkColumn(1) || checkColumn(2);
      };
      
      const hasDiagonalWinner = ():string|null => {
        const checkDiagonal = (type:string):string|null => {
          let column_values:(string|null)[] = [];
          if (type === "left-to-right") {
            column_values = [matrix[0][0], matrix[1][1], matrix[2][2]];
          } else {
            column_values = [matrix[0][2], matrix[1][1], matrix[2][0]];
          }
          return (column_values.every((x) => column_values[0] === x)) ? column_values[0] : null;
        };
        return checkDiagonal("left-to-right") || checkDiagonal("right-to-left");
      };
      
      
      return hasHorizontalWinner() || hasVerticalWinner() || hasDiagonalWinner();
}


const initialMatrix : (string|null)[][] = [
    ["x", null, null],
    [null, "x",null],
    [null, null,null],
];

const result:string|null = processWinner(initialMatrix);
console.log(result);