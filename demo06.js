// var workmate1={
//     name:'JSPang',
//     age:33,
//     sex:1,
//     job:'前端',
//     skill:{
//         skillOne:'HTML+CSS',
//         skillTwo:'JavaScript',
//         skillThree:'PHP'
//     },
//     regeditTime:new Date(),
//     interest:['看电影','看书','吃美食','钓鱼','旅游']
// }
 
// var workmate2={
//     name:'ShengLei',
//     age:31,
//     sex:1,
//     job:'JAVA后端',
//     skill:{
//         skillOne:'HTML+CSS',
//         skillTwo:'J2EE',
//         skillThree:'PPT'
//     },
//     regeditTime:new Date(),
//     interest:['篮球','看电影','做饭']
// }
 
// var workmate3={
//     name:'MinJie',
//     age:18,
//     sex:0,
//     job:'UI',
//     skill:{
//         skillOne:'PhotoShop',
//         skillTwo:'UI',
//         skillThree:'PPT'
//     },
//     regeditTime:new Date(),
//     interest:['做饭','画画','看电影']
// }
// var workmate4={
//     name:'XiaoWang',
//     age:25,
//     sex:1,
//     job:'UI',
//     skill:{
//         skillOne:'PhotoShop',
//         skillTwo:'UI',
//         skillThree:'PPT'
//     },
//     regeditTime:new Date(),
//     interest:['写代码','篮球','画画']
// }
// var workmate5={
//     name:'LiangPeng',
//     age:28,
//     sex:1,
//     job:'前端',
//     skill:{
//         skillOne:'HTML+CSS',
//         skillTwo:'JavaScript',
//     },
//     regeditTime:new Date(),
//     interest:['玩游戏','写代码','做饭']
// }
 
// var workmate6={
//     name:'HouFei',
//     age:25,
//     sex:0,
//     job:'前端',
//     skill:{
//         skillOne:'HTML+CSS',
//         skillTwo:'JavaScript',
//     },
//     regeditTime:new Date(),
//     interest:['化妆','读书','做饭']
// }
 
// var workmate7={
//     name:'LiuYan',
//     age:35,
//     sex:0,
//     job:'美工',
//     skill:{
//         skillOne:'PhotoShop',
//         skillTwo:'CAD',
//     },
//     regeditTime:new Date(),
//     interest:['画画','聚会','看电影']
// }
 
 
// var workmate8={
//     name:'DingLu',
//     age:20,
//     sex:0,
//     job:'美工',
//     skill:{
//         skillOne:'PhotoShop',
//         skillTwo:'CAD',
//     },
//     regeditTime:new Date(),
//     interest:['美食','看电影','做饭']
// }
 
// var workmate9={
//     name:'JiaPeng',
//     age:29,
//     sex:1,
//     job:'前端',
//     skill:{
//         skillOne:'HTML+CSS',
//         skillTwo:'JavaScript',
//         skillThree:'PHP'
//     },
//     regeditTime:new Date(),
//     interest:['写代码','篮球','游泳']
// }
 
// var workmate10={
//     name:'LiJia',
//     age:26,
//     sex:0,
//     job:'前端',
//     skill:{
//         skillOne:'HTML+CSS',
//         skillTwo:'JavaScript',
//         skillThree:'PHP'
//     },
//     regeditTime:new Date(),
//     interest:['玩游戏','美食','篮球']
// }
 
 
 
// var db=connect('company');
// var workmateArray=[workmate1,workmate2,workmate3,workmate4,workmate5,workmate6,workmate7,workmate8,workmate9,workmate10];
// db.workmate.insert(workmateArray);
// print('[SUCCESS]：The data was inserted successfully');

db.workmate.find(
    {interest:['画画','聚会','看电影']},
    {name:true,interest:true,age:true,_id:false}
)

db.workmate.find(
    {interest:'画画'},
    {name:true,interest:true,age:true,_id:false}
)

// $all &&
    db.workmate.find(
        {interest:{$all:['看电影','看书']}},
        {name:true,interest:true,age:true,_id:false}
    )

// $in ||
db.workmate.find(
    {interest:{$in:['看电影','看书']}},
    {name:true,interest:true,age:true,_id:false}
)

// $size
    db.workmate.find(
        {interest:{$size:5}},
        {name:true,interest:true,age:true,_id:false}
    )
// $slice
    db.workmate.find(
        {interest:{$size:3}},
        {name:true,interest:{$slice:1},age:true,_id:false}
    )
    db.workmate.find(
        {interest:{$size:3}},
        {name:true,interest:{$slice:-1},age:true,_id:false}
    )
    

//分页显示  年龄从小到大      sort
db.workmate.find(
    {},
    {name:true,age:true,_id:false}
).limit(2).skip(0).sort({age:1})


//$where
db.workmate.find(
    {$where:'this.age>30'},
    {name:true,age:true,_id:false}
)