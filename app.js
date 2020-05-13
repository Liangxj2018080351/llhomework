const express=require('express');
const bodyParser=require('body-parser');
// 引入路由器
const userRouter=require('./routes/user.js');
const productRouter=require('./routes/product.js');
const shoppingRouter=require('./routes/shoppingcart.js');
let app=express();
app.listen(7070);
//托管静态资源
app.use( express.static('public') );
//使用body-parser中间件
app.use( bodyParser.urlencoded({
  extended:false
}) );
//把用户路由器挂载到服务器，给URL添加前缀/user  /user/reg
app.use('/user',userRouter);
app.use('/product',productRouter);
app.use('/shoppingcart',shoppingRouter);

