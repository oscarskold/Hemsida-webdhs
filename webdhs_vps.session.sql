
--@block
USE webdhs;

--@block
USE test;

--@block
SELECT * FROM test.cart_items;


--@block
INSERT INTO products (name, description, price, created, modified) 
VALUES
    ('Baspaket', 'Vårat billigaste alternativ här ingår även en fri månad Hosting', '299', '2022-12-02', '2022-12-02'),
    ('PremiumPaket', 'Personligt gjord hemsida mer möjligheter för förendring', '399', '2022-12-02', '2022-12-02'),
    ('Webhosting', 'Månadsavgift här ingår snabb akrtiv support', '49', '2022-12-02', '2022-12-02');

--@block
SELECT * FROM products;

--@block
UPDATE products
SET description = 'hi'
WHERE id = 3;

--@block
CREATE TABLE cart_items (
  id int NOT NULL AUTO_INCREMENT,
  product_id int NOT NULL,
  quantity smallint DEFAULT NULL,
  user_id smallint DEFAULT NULL,
  created smallint DEFAULT NULL,
  modified smallint DEFAULT NULL,
  PRIMARY KEY (id)
)

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
DELETE FROM users WHERE user_name = 'test';

--@block
ALTER TABLE users modify 

--@block
UPDATE products SET description = 'Detta är vår månadsavgift, här ingår snabb och aktiv support' WHERE id = 3;