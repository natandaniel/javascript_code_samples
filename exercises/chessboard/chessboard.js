let size = prompt("Enter chessboard grid size : ");


for(let row=1;row<=size;row++){
    let chessBoardRow = "";

    if(row % 2 == 0){
        for(let i=1;i<=size;i++){
            chessBoardRow += "# ";
        }
    }else{
        for(let i=1;i<=size;i++){
            chessBoardRow += " #";
        }
    }
    console.log(chessBoardRow);
}