drop database chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE rooms (
  id smallint(5) not null auto_increment,
  roomname char(20) not null,
  primary key(id)
);

CREATE TABLE users (
  id smallint(5) not null auto_increment,
  username char(255) not null,
  primary key(id)
);

CREATE TABLE messages (
  id smallint(5) not null auto_increment,
  text char(150) not null,
  room smallint(5) not null,
  user smallint(5) not null,
  primary key(id),
  foreign key(room) REFERENCES rooms(id),
  FOREIGN KEY(user) REFERENCES users(id)
);

create table users_messages (
  messageid smallint(5) not null,
  userid smallint(5) not null,
  foreign key(messageid) REFERENCES messages(id),FOREIGN key(userid) REFERENCES users(id)
);

create table rooms_messages (
  roomid SMALLINT(5) not null,
  messageid smallint(5) not null,
  FOREIGN key (roomid) REFERENCES rooms(id),
  FOREIGN KEY(messageid) REFERENCES messages(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

