INSERT INTO products
(prod_name, prod_desc, prod_price, user_id)
VALUES 
($1, $2, $3, $4)
RETURNING*