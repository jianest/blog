var mysql  = require('mysql');
//数据库的配置
var connection = mysql.createConnection({
	host: 'localhost', 
    user: 'root',
    password: '123456',
    database:'yfzs',
    port: 3306
});
connection.connect();
module.exports = {
    connection,
    sqls:{
    	//注册成功，添加用户名和密码
    	insert:'INSERT INTO user(username, password) VALUES(?,?)',
    	//根据用户名，删除账号
	    delete: 'delete from user where username=?',
	    //查询所有用户信息
	    searchUsers: 'select * from user',
	    //查询所有文章
	    searchArticles: 'select * from article',
	    //输入用户名，查询用户信息
	    searchUser:'select * from user where username=?',
	    //输入用户名和密码，查询用户信息
	    loginSql:'select * from user where username=? and password=?'
    }
};