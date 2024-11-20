CREATE TABLE items(
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT, -- Foreign key to link each item to an order
    product_name VARCHAR(100),
    product_price VARCHAR(20),
    FOREIGN KEY (order_id) REFERENCES orders(id)
);