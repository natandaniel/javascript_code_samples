for(let row=1;row<=8;row++){
    let chessBoardRow = "";

    if(row % 2 == 0){
        chessBoardRow = "# # # # ";
    }else{
        chessBoardRow = " # # # #";
    }
    console.log(chessBoardRow);
}