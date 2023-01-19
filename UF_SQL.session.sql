USE oskar;
--@block
USE WEBDHS;
--@block
use shopping_cart;

--@block
INSERT INTO produkt (name, description, price, created, modified) 
VALUES
    ('Baspaket', 'Vårat billigaste alternativ här ingår även en fri månad Hosting', '299', '2022-12-02', '2022-12-02'),
    ('PremiumPaket', 'Personligt gjord hemsida mer möjligheter för förendring', '399', '2022-12-02', '2022-12-02'),
    ('Webhosting', 'Månadsavgift här ingår snabb akrtiv support', '49', '2022-12-02', '2022-12-02');

--@block
SELECt * FROM produkt

--@block
SELECT * FROM cart_items;

--@block
SELECT id, product_id FROM cart_items ORDER BY id

--@block
CREATE USER 'oskar'@'localhost' IDENTIFIED BY 'Sämst123';

--@block

CREATE DATABASE oskar; CREATE TABLE oskar.cart_items SELECT * FROM shopping_cart.cart_items;

--@block
mysqldump 
-uroot -p 
--routines 
--triggers 
--flush-privileges 
--all-databases > MySQLData.sql