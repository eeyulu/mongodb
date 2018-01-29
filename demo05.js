//数据准备

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
//     interest:[]
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
//     interest:[]
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
//     interest:[]
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
//     interest:[]
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
//     interest:[]
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
//     interest:[]
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
//     interest:[]
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
//     interest:[]
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
//     interest:[]
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
//     interest:[]
// }
// var db=connect('company');
// var workmateArray=[workmate1,workmate2,workmate3,workmate4,workmate5,workmate6,workmate7,workmate8,workmate9,workmate10];
// db.workmate.insert(workmateArray);
// print('[SUCCESS]：The data was inserted successfully')

// 小于($lt):英文全称less-than
// 小于等于($lte)：英文全称less-than-equal
// 大于($gt):英文全称greater-than
// 大于等于($gte):英文全称greater-than-equal
// 不等于($ne):英文全称not-equal

db.workmate.find(
    {"skill.skillOne":"HTML+CSS"},
    {name:true,"skill.skillOne":true,_id:false}
)

db.workmate.find(
    {age:{$lte:30,$gte:25}},
    {name:true,age:true,_id:false}
)

var startDate = new Date("01/01/2018");
db.workmate.find(
    {regeditTime:{$gt:startDate}},
    {name:true,regeditTime:true,_id:false}

)

//$in 一个key多value
db.workmate.find(
    {age:{$in:[25,33]}},
    {name:true,age:true,_id:false}
)
//$nin
    db.workmate.find(
        {age:{$nin:[25,33]}},
        {name:true,age:true,_id:false}
    )
    
//$or    
    db.workmate.find(
        {$or:[
            {age:{$gt:30}},
            {"skill.skillThree":'PHP'}
        ]},
        {name:true,"skill.skillThree":true,age:true,_id:false}
    )
    
//$and
    db.workmate.find(
        {$and:[
            {age:{$gt:30}},
            {"skill.skillThree":'PHP'}
        ]},
        {name:true,"skill.skillThree":true,age:true,_id:false}
    )

//$not
    db.workmate.find(
        {
            age:{
                $not:{
                    $lte:30,
                    $gte:20
                }
            }
        },
        {name:true,age:true,_id:false}
    )