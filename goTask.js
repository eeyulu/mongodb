var userName="jspang";
var timeStamp= Date.parse(new Date());
var jsonDatabase={
    "loginName":userName,
    "loginTime":timeStamp
};
var db = connect('log');    //链接数据库
db.login.insert(jsonDatabase);   //插入(集合login)数据
print("[demo]:log print sucess");