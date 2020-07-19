INSERT INTO users 
(email, username, phone, address, password, is_vendor)
VALUES
($1, $2, $3, $4, $5, $6)
RETURNING*