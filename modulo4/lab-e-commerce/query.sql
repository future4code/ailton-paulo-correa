-- Cadastro de usuário
CREATE TABLE labecommerce_users (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
SELECT * FROM labecommerce_users;
-- Busca por todos os usuários
CREATE TABLE labecommerce_products (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DOUBLE NOT NULL,
    image_url VARCHAR(255) NOT NULL
);

-- Registro de compra
CREATE TABLE labecommerce_purchases (
    id VARCHAR(255) PRIMARY KEY,
    quantity INT NOT NULL,
    total_price INT NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    product_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id)
        REFERENCES labecommerce_users (id),
    FOREIGN KEY (product_id)
        REFERENCES labecommerce_products (id)
);