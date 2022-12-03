
--@block
USE WEBDHS;
--@block
use shopping_cart;

--@block
INSERT INTO produkt (id, name, description, price, created, modified) 
VALUES
    (1, 'Baspaket', 'Vårat billigaste alternativ här ingår även en fri månad Hosting', '299', '2022-12-02', '2022-12-02'),
    (2, 'PremiumPaket', 'Personligt gjord hemsida mer möjligheter för förendring', '399', '2022-12-02', '2022-12-02'),
    (3, 'Webhosting', 'Månadsavgift här ingår snabb akrtiv support', '49', '2022-12-02', '2022-12-02');
