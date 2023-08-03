DROP TABLE IF EXISTS book;

CREATE TABLE book (
    book_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(250) NOT NULL
);

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL
);

DROP TABLE IF EXISTS book_users;

CREATE TABLE book_users (
    book_id INT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN key (book_id) REFERENCES book (book_id),
    FOREIGN key (user_id) REFERENCES users (user_id)
);

DROP TABLE IF EXISTS security;

CREATE TABLE security (
    security_id INT AUTO_INCREMENT PRIMARY KEY,
    isin VARCHAR(50),
    cusip VARCHAR(50),
    issuer_name VARCHAR(250) NOT NULL,
    coupon_percent FLOAT NOT NULL,
    bond_currency VARCHAR(10) NOT NULL,
    face_value FLOAT NOT NULL,
    maturity_date DATE NOT NULL,
    status VARCHAR(50) NOT NULL,
    type VARCHAR(250) NOT NULL
);

DROP TABLE IF EXISTS counter_party;

CREATE TABLE counter_party (
    counter_party_id INT AUTO_INCREMENT PRIMARY KEY,
    bond_holder VARCHAR(250) NOT NULL
);

DROP TABLE IF EXISTS trades;

CREATE TABLE trades (
    trade_id INT AUTO_INCREMENT PRIMARY KEY,
    book_id INT NOT NULL,
    security_id INT NOT NULL,
    counterparty_id INT NOT NULL,
    trade_type VARCHAR(50) NOT NULL,
    trade_currency VARCHAR(10) NOT NULL,
    quantity INT NOT NULL,
    trade_settlement_date DATE NOT NULL,
    trade_status VARCHAR(50) NOT NULL,
    trade_date DATE NOT NULL,
    unit_price FLOAT NOT NULL,
    FOREIGN key (book_id) REFERENCES book (book_id),
    FOREIGN key (security_id) REFERENCES security (security_id),
    FOREIGN key (counterparty_id) REFERENCES counter_party (counter_party_id)
);