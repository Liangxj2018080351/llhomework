const express =require('express');
// 引入连接池
const pool=require('../pool.js');
// 创建路由器对象
let router=express.Router();
// 挂载路由
// 1.注册用户  post  /reg
router.post('/reg',(req,res)=>{
  //1.1获取数据
  let obj=req.body;
  //1.2验证各项数据是否为空
  if(!obj.uname){
    res.send({code:401,msg:'uname required'});
	//阻止往后执行
	return;
  }
  if(!obj.upwd){
    res.send({code:402,msg:'upwd required'});
	return;
  }
  if(!obj.email){
    res.send({code:403,msg:'email required'});
	return;
  }
  //1.3执行SQL语句
  pool.query('INSERT INTO zy_user SET ?',[obj],(err,result)=>{
    if(err) throw err;
	console.log(result);
	//如果数据插入成功，响应对象
	if(result.affectedRows>0){
	  res.send({code:200,msg:'register suc'});
	}
  });
});
//2.用户登录 post /login
router.post('/login',(req,res)=>{
  //2.1获取数据
  let obj=req.body;
  console.log(obj);
  //2.2验证是否为空
  if(!obj.uname){
    //res.send({code:401,msg:'uname required'});
	return;
  }
  if(!obj.upwd){
    //res.send({code:402,msg:'upwd required'});
	return;
  }
  //2.3执行SQL语句
  pool.query('SELECT * FROM zy_user WHERE uname=? AND upwd=?',[obj.uname,obj.upwd],(err,result)=>{
    if(err) throw err;
	console.log(result);
	//返回的结果是数组，如果查询到了对应的用户，数组中会出现这条数据；否则返回空数组，查询不到数据，登录失败
	if(result.length>0){
	  res.send({code:200,msg:'login suc'});
	}else{
	  res.send({code:301,msg:'login err'});  
	}
  })
});
// 导出路由器对象
module.exports=router;