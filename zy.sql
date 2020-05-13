SET NAMES UTF8;
DROP DATABASE IF EXISTS zy;
CREATE DATABASE zy CHARSET=UTF8;
USE zy;

/**用户信息 user**/
create table zy_user(
  uid int primary key auto_increment,
  uname varchar(16),
  upwd varchar(16),
  email varchar(32),

  avatar varchar(128),   #头像图片路径
  user_name  varchar(32),  #用户名
  gender int      #性别
);