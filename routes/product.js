
const express =require('express');
// 引入连接池
const pool=require('../pool.js');
// 创建路由器对象
let router =express.Router();
// 挂载路由
// 1.商品主页面
router.post('/index',(req,res)=>{
    let obj =req.body;
    res.send('商品主页面');
});
// 导出路由器对象
module.exports=router;