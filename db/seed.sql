CREATE TABLE users
(
user_id SERIAL PRIMARY KEY,
email VARCHAR(50),
username VARCHAR(20),
phone VARCHAR(50),
address VARCHAR(200),
password VARCHAR(500),
is_vendor BOOLEAN,
-- profile_img TEXT
)

INSERT INTO users 
VALUES 
(1, 'test@test.com', 'testing-name', '1231231234','123 fake st', 'Admin123', TRUE)

CREATE TABLE products (
    prod_id SERIAL PRIMARY KEY,
    prod_name VARCHAR(50),
    prod_desc VARCHAR(200),
    prod_price VARCHAR(10),
    -- prod_img TEXT,
    user_id INT REFERENCES users(user_id)
)

-- INSERT INTO products 
-- VALUES  (1, 'item test', 'testing desc', '500 caps')

-- INSERT INTO products 
-- VALUES  (2, 'item test 2!', 'testing desc 2!!', '1000 caps')