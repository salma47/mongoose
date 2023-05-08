drop database if exists ecomerce;
create database ecomerce;
use ecomerce;

create table product(
id int auto_increment,
image varchar(255),
price varchar(100),
title varchar(100),
description varchar(255),
created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
primary key(id)
);
