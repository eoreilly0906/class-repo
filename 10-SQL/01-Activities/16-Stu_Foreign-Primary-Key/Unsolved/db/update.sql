UPDATE customers
SET first_name = 'Jake', last_name = 'Sully'
WHERE id = 1;

UPDATE customer_orders
SET customer_id = 1
WHERE id = 1;

UPDATE customers
SET first_name = 'Neytiri', last_name = 'Nahuel'
WHERE id = 2;

UPDATE customer_orders
SET customer_id = 2
WHERE id = 2;

DELETE FROM customers
WHERE id = 1;

DELETE FROM customer_orders
WHERE id = 1;   