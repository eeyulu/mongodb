
//db.runCommand
// db.workmate.update({sex:1},{$set:{money:1000}},false,true);
// var resultMessage = db.runCommand({getLastError:1});
// printjson(resultMessage);

//findAndModify

var myModify = {
    findAndModify:"workmate",
    query:{name:"she"},
    update:{$set:{age:18}},
    new:true
}

var resultMessage = db.runCommand(myModify);
printjson(resultMessage);