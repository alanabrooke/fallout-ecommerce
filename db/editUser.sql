UPDATE users
SET email = $2,
 username = $3,
 phone = $4,
 address = $5,
 password = $6
WHERE user_id = $1