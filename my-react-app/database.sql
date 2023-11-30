CREATE TABLE games (
    id NUMERIC PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price NUMERIC(10, 2) NOT NULL, 
    type VARCHAR(50) NOT NULL
);
