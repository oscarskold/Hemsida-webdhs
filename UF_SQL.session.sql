

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
SELECT * FROM cart_items;

--@block
INSERT INTO cart_items (product_id) SELECT id FROM produkt WHERE id=2;

--@block
ALTER TABLE cart_items
MODIFY COLUMN modified smallint;

--@block
DELETE FROM cart_items WHERE product_id=1;