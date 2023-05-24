
--@block
USE webdhs;

--@block
USE test;

--@block
SELECT * FROM webdhs.users;


--@block
INSERT INTO products (name, description, price, created, modified) 
VALUES
    ('Baspaket', 'Vårat billigaste alternativ här ingår även en fri månad Hosting', '299', '2022-12-02', '2022-12-02'),
    ('PremiumPaket', 'Personligt gjord hemsida mer möjligheter för förendring', '399', '2022-12-02', '2022-12-02'),
    ('Webhosting', 'Månadsavgift här ingår snabb akrtiv support', '49', '2022-12-02', '2022-12-02');

--@block
SELECT * FROM test.cart_items;

--@block
SELECT * FROM products;

--@block
CREATE TABLE cart_items(
  id int NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description text NOT NULL,
  price int NOT NULL,
  quantity smallint DEFAULT NULL,
  user_id smallint DEFAULT NULL,
  created smallint DEFAULT NULL,
  modified smallint DEFAULT NULL,
  PRIMARY KEY (id)
);

--@block
SELECT * FROM mysql.user;

--@block
CREATE TABLE users (
    user_id int NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
    user_session_id VARCHAR(255) ,
    PRIMARY KEY (user_id)
);

--@block
INSERT INTO users (user_name, user_email, user_password, user_session_id) VALUES
('vilgot','oskar@gmail.com', 'vilgot', ''),
('oskar','oskar@gmail.com', 'oskar', ''),
('oscar', 'oscar@gmail.com', 'oscar', '');

--@block
SELECT * FROM users WHERE EXISTS (SELECT * FROM users WHERE user_name = 'test');

--@block
--Tar bort användare
DELETE FROM webdhs.users;
--@block
INSERT INTO test.cart_items (name, description, price) VALUES  "Premiumpaket", ""

--@block
IF NOT EXISTS RENAME TABLE users to users;