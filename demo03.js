var db = connect('company');
// db.workmate.update({name:'she'},{sex:0});
// var workmate3 ={
//     name:'he',
//     age:20,
//     sex:31,
//     job:'ui',
//     skill:{
//         skillOne:'ps',
//         skillTwo:'icon',
//         skillThree:'dr'
//     },
//     regeditTime:new Date()
// }
// db.workmate.update({name:'he'},workmate3);


//-------------------------------------------
//$set
// db.workmate.update({name:'she'},{"$set":{sex:0,age:88}});
// db.workmate.update({name:'she'},{$set:{"skill.skillThree":"xx"}});
//$unset
// db.workmate.update({name:'she'},{$unset:{age:''}});
// db.workmate.update({name:'she'},{$set:{age:20}});


//inc
// db.workmate.update({name:'she'},{$inc:{"age":-2}});
//multi
// db.workmate.update({},{$set:{interset:[]}},{multi:true});
//upsert
// db.workmate.update({name:'xiaowang'},{$set:{age:232}},{upsert:true});
//$push
// db.workmate.update({name:"xiaowang"},{$push:{interset:'draw'}});
// db.workmate.update({name:"she"},{$push:{"skill.skillFour":'ooxx'}});

//$ne
// db.workmate.update({name:'xiaowang',interset:{$ne:'game'}},{$push:{interset:'PlayGame'}});
//$addToSet
// db.workmate.update({name:'xiaowang'},{$addToSet:{interset:'readBook'}})
// $each
// var newInte = ['sings','code','dance'];
// db.workmate.update({name:'xiaowang'},{$addToSet:{interset:{$each:newInte}}});

//$opp:1---从末端进行删除 ，-1----------从开始端删除
// db.workmate.update({name:'xiaowang'},{$pop:{interset:1}})

// 数组定位修改
db.workmate.update({name:'xiaowang'},{$set:{"interset.2":'dance'}});
print('[update]:success')