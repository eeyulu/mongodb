var workmate1 ={
    name:'jspang',
    age:33,
    sex:1,
    job:'web',
    skill:{
        skillOne:'Html',
        skillTwo:'JavaScript',
        skillThree:'java'
    },
    regeditTime:new Date()
}
var workmate2 ={
    name:'she',
    age:23,
    sex:1,
    job:'java',
    skill:{
        skillOne:'Css',
        skillTwo:'j2ee',
        skillThree:'java'
    },
    regeditTime:new Date()
}
var workmate3 ={
    name:'he',
    age:20,
    sex:2,
    job:'ui',
    skill:{
        skillOne:'ps',
        skillTwo:'icon',
        skillThree:'dr'
    },
    regeditTime:new Date()
}

var db = connect('company');
var workmateArray=[workmate1,workmate2,workmate3];
db.workmate.insert(workmateArray);
print('[SUCCES]：The data wan')