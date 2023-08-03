INSERT INTO book (name) VALUES ('trading_book_1');
INSERT INTO book (name) VALUES ('trading_book_2');
INSERT INTO book (name) VALUES ('trading_book_3');
INSERT INTO book (name) VALUES ('trading_book_4');
INSERT INTO book (name) VALUES ('trading_book_5');
INSERT INTO book (name) VALUES ('trading_book_6');

INSERT INTO users (name, email) VALUES ('username', 'user@mail.de');

INSERT INTO book_users (book_id, user_id) VALUES ((SELECT book_id from book where name='trading_book_3'), (SELECT user_id from users where name='username'));
INSERT INTO book_users (book_id, user_id) VALUES ((SELECT book_id from book where name='trading_book_6'), (SELECT user_id from users where name='username'));

INSERT INTO security (isin, cusip, issuer_name, coupon_percent, bond_currency, face_value, maturity_date, status, type) VALUES ('XS1988387210', '', 'BNPParibasIssu 4,37% Microsoft Corp (USD)', 4.37, 'USD', 1000, '2023-08-05', 'active', 'CORP');
INSERT INTO security (isin, cusip, issuer_name, coupon_percent, bond_currency, face_value, maturity_date, status, type) VALUES ('USN0280EAR64', '123456780', 'Airbus 3.15%  USD', 3.15, 'USD', 900, '2023-07-30', 'active', 'CORP');
INSERT INTO security (isin, cusip, issuer_name, coupon_percent, bond_currency, face_value, maturity_date, status, type) VALUES ('A12356111', '123456bh0', 'UBS Facebook (USD)', 2, 'USD', 900, '2023-09-30', 'active', 'CORP');
INSERT INTO security (isin, cusip, issuer_name, coupon_percent, bond_currency, face_value, maturity_date, status, type) VALUES ('USU02320AG12', 'AMZN 3.15 08/22/27 REGS', 'Amazon', 3.15, 'USD', 900, '2023-08-03', 'active', 'CORP');
INSERT INTO security (isin, cusip, issuer_name, coupon_percent, bond_currency, face_value, maturity_date, status, type) VALUES ('GB00B6460505', 'BDCHBW8', 'HM Treasury United Kingdon', 0.75, 'GBP', 900, '2023-08-09', 'active', 'GOVN');
INSERT INTO security (isin, cusip, issuer_name, coupon_percent, bond_currency, face_value, maturity_date, status, type) VALUES ('US87973RAA86', '87973RAA8', 'TEMASEK FINL I LTD GLOBAL MEDIUM TERM NTS BOOK ENTRY REG S', 2.02, 'USD', 690, '2023-08-06', 'active', 'SOVN');
INSERT INTO security (isin, cusip, issuer_name, coupon_percent, bond_currency, face_value, maturity_date, status, type) VALUES ('IE00B29LNP31', '87973RAA8', 'First Norway Alpha Kl.IV', 1.123, 'USD', 340, '2030-12-22', 'active', 'SOVN');

INSERT INTO counter_party (bond_holder) VALUES ('AZ Holdings Inc');
INSERT INTO counter_party (bond_holder) VALUES ('Acme co');
INSERT INTO counter_party (bond_holder) VALUES ('Sovereign Investments');
INSERT INTO counter_party (bond_holder) VALUES ('Astra Trading Ltd');
INSERT INTO counter_party (bond_holder) VALUES ('Muncipal Gov Of Orange County');
INSERT INTO counter_party (bond_holder) VALUES ('Goldman Sachs');
INSERT INTO counter_party (bond_holder) VALUES ('UBS');
INSERT INTO counter_party (bond_holder) VALUES ('Barclays');
INSERT INTO counter_party (bond_holder) VALUES ('British Telecom');
INSERT INTO counter_party (bond_holder) VALUES ('Pension Holdings');
INSERT INTO counter_party (bond_holder) VALUES ('Zurich Pension fund 4');

INSERT into trades (book_id, security_id, counterparty_id, trade_type, trade_currency, quantity, trade_settlement_date, trade_status, trade_date, unit_price) VALUES ((SELECT book_id from book where name='trading_book_1'), (SELECT security_id from security where isin='XS1988387210'), (SELECT counter_party_id from counter_party where bond_holder='AZ Holdings Inc'), 'buy', 'USD', 50, '2021-08-04', 'open', '2021-05-13', 90);
INSERT into trades (book_id, security_id, counterparty_id, trade_type, trade_currency, quantity, trade_settlement_date, trade_status, trade_date, unit_price) VALUES ((SELECT book_id from book where name='trading_book_1'), (SELECT security_id from security where isin='XS1988387210'), (SELECT counter_party_id from counter_party where bond_holder='AZ Holdings Inc'), 'sell', 'GBP', 40, '2021-08-04', 'open', '2021-02-04', 89.56);
INSERT into trades (book_id, security_id, counterparty_id, trade_type, trade_currency, quantity, trade_settlement_date, trade_status, trade_date, unit_price) VALUES ((SELECT book_id from book where name='trading_book_2'), (SELECT security_id from security where isin='USN0280EAR64'), (SELECT counter_party_id from counter_party where bond_holder='Acme co'), 'buy', 'USD', 1000,' 2021-08-23', 'open', '2021-05-13', 105775);
INSERT into trades (book_id, security_id, counterparty_id, trade_type, trade_currency, quantity, trade_settlement_date, trade_status, trade_date, unit_price) VALUES ((SELECT book_id from book where name='trading_book_2'), (SELECT security_id from security where isin='USN0280EAR64'), (SELECT counter_party_id from counter_party where bond_holder='Acme co'), 'sell', 'GBP', 900, '2021-09-10', 'open', '2021-02-04', 105775);
INSERT into trades (book_id, security_id, counterparty_id, trade_type, trade_currency, quantity, trade_settlement_date, trade_status, trade_date, unit_price) VALUES ((SELECT book_id from book where name='trading_book_3'), (SELECT security_id from security where isin='A12356111'), (SELECT counter_party_id from counter_party where bond_holder='Sovereign Investments'), 'buy', 'USD', 50, '2021-08-23', 'open', '2021-05-13', 90);
INSERT into trades (book_id, security_id, counterparty_id, trade_type, trade_currency, quantity, trade_settlement_date, trade_status, trade_date, unit_price) VALUES ((SELECT book_id from book where name='trading_book_2'), (SELECT security_id from security where isin='USN0280EAR64'), (SELECT counter_party_id from counter_party where bond_holder='Astra Trading Ltd'), 'buy', 'USD', 1000, '2021-08-23', 'open', '2021-05-13', 105775);
INSERT into trades (book_id, security_id, counterparty_id, trade_type, trade_currency, quantity, trade_settlement_date, trade_status, trade_date, unit_price) VALUES ((SELECT book_id from book where name='trading_book_2'), (SELECT security_id from security where isin='A12356111'), (SELECT counter_party_id from counter_party where bond_holder='Sovereign Investments'), 'sell', 'USD', 50, '2021-08-23', 'open', '2021-05-13', 90);
INSERT into trades (book_id, security_id, counterparty_id, trade_type, trade_currency, quantity, trade_settlement_date, trade_status, trade_date, unit_price) VALUES ((SELECT book_id from book where name='trading_book_4'), (SELECT security_id from security where isin='USU02320AG12'), (SELECT counter_party_id from counter_party where bond_holder='Muncipal Gov Of Orange County'), 'buy', 'GBP', 60, '2021-09-27', 'open', '2021-02-04', 98.56);
INSERT into trades (book_id, security_id, counterparty_id, trade_type, trade_currency, quantity, trade_settlement_date, trade_status, trade_date, unit_price) VALUES ((SELECT book_id from book where name='trading_book_4'), (SELECT security_id from security where isin='USU02320AG12'), (SELECT counter_party_id from counter_party where bond_holder='Muncipal Gov Of Orange County'), 'buy', 'USD', 50, '2021-08-23', 'open', '2021-08-23', 98.56);
INSERT into trades (book_id, security_id, counterparty_id, trade_type, trade_currency, quantity, trade_settlement_date, trade_status, trade_date, unit_price) VALUES ((SELECT book_id from book where name='trading_book_6'), (SELECT security_id from security where isin='GB00B6460505'), (SELECT counter_party_id from counter_party where bond_holder='Goldman Sachs'), 'buy', 'GBP', 1100, '2021-09-27', 'open', '2021-09-27', 110.35);
INSERT into trades (book_id, security_id, counterparty_id, trade_type, trade_currency, quantity, trade_settlement_date, trade_status, trade_date, unit_price) VALUES ((SELECT book_id from book where name='trading_book_6'), (SELECT security_id from security where isin='GB00B6460505'), (SELECT counter_party_id from counter_party where bond_holder='Goldman Sachs'), 'sell', 'GBP', 900, '2021-09-28', 'open', '2021-09-28', 110.35);
INSERT into trades (book_id, security_id, counterparty_id, trade_type, trade_currency, quantity, trade_settlement_date, trade_status, trade_date, unit_price) VALUES ((SELECT book_id from book where name='trading_book_6'), (SELECT security_id from security where isin='GB00B6460505'), (SELECT counter_party_id from counter_party where bond_holder='UBS'), 'buy', 'GBP', 2000, '2021-09-29', 'open', '2021-09-29', 110.35);
INSERT into trades (book_id, security_id, counterparty_id, trade_type, trade_currency, quantity, trade_settlement_date, trade_status, trade_date, unit_price) VALUES ((SELECT book_id from book where name='trading_book_6'), (SELECT security_id from security where isin='GB00B6460505'), (SELECT counter_party_id from counter_party where bond_holder='UBS'), 'sell', 'GBP', 2000, '2021-09-30', 'open', '2021-09-30', 110.35);
INSERT into trades (book_id, security_id, counterparty_id, trade_type, trade_currency, quantity, trade_settlement_date, trade_status, trade_date, unit_price) VALUES ((SELECT book_id from book where name='trading_book_6'), (SELECT security_id from security where isin='GB00B6460505'), (SELECT counter_party_id from counter_party where bond_holder='Barclays'), 'buy', 'GBP', 1000, '2021-10-01', 'open', '2021-10-01', 110.35);
INSERT into trades (book_id, security_id, counterparty_id, trade_type, trade_currency, quantity, trade_settlement_date, trade_status, trade_date, unit_price) VALUES ((SELECT book_id from book where name='trading_book_6'), (SELECT security_id from security where isin='GB00B6460505'), (SELECT counter_party_id from counter_party where bond_holder='Barclays'), 'buy', 'GBP', 900, '2019-10-02', 'open', '2019-10-02', 110.35);
INSERT into trades (book_id, security_id, counterparty_id, trade_type, trade_currency, quantity, trade_settlement_date, trade_status, trade_date, unit_price) VALUES ((SELECT book_id from book where name='trading_book_6'), (SELECT security_id from security where isin='GB00B6460505'), (SELECT counter_party_id from counter_party where bond_holder='Barclays'), 'sell', 'GBP', 1900, '2019-10-03', 'open', '2019-10-03', 110.35);
INSERT into trades (book_id, security_id, counterparty_id, trade_type, trade_currency, quantity, trade_settlement_date, trade_status, trade_date, unit_price) VALUES ((SELECT book_id from book where name='trading_book_6'), (SELECT security_id from security where isin='GB00B6460505'), (SELECT counter_party_id from counter_party where bond_holder='British Telecom'), 'buy', 'GBP', 600, '2018-10-04', 'open', '2018-10-04', 110.35);
INSERT into trades (book_id, security_id, counterparty_id, trade_type, trade_currency, quantity, trade_settlement_date, trade_status, trade_date, unit_price) VALUES ((SELECT book_id from book where name='trading_book_6'), (SELECT security_id from security where isin='GB00B6460505'), (SELECT counter_party_id from counter_party where bond_holder='Pension Holdings'), 'buy', 'GBP', 600, '2019-10-05', 'open', '2019-10-05', 110.35);
INSERT into trades (book_id, security_id, counterparty_id, trade_type, trade_currency, quantity, trade_settlement_date, trade_status, trade_date, unit_price) VALUES ((SELECT book_id from book where name='trading_book_6'), (SELECT security_id from security where isin='GB00B6460505'), (SELECT counter_party_id from counter_party where bond_holder='Pension Holdings'), 'buy', 'GBP', 700, '2021-06-06', 'open', '2021-06-06', 110.35);
INSERT into trades (book_id, security_id, counterparty_id, trade_type, trade_currency, quantity, trade_settlement_date, trade_status, trade_date, unit_price) VALUES ((SELECT book_id from book where name='trading_book_6'), (SELECT security_id from security where isin='GB00B6460505'), (SELECT counter_party_id from counter_party where bond_holder='Pension Holdings'), 'sell', 'GBP', 1300, '2021-10-07', 'open', '2011-10-07', 110.35);
INSERT into trades (book_id, security_id, counterparty_id, trade_type, trade_currency, quantity, trade_settlement_date, trade_status, trade_date, unit_price) VALUES ((SELECT book_id from book where name='trading_book_4'), (SELECT security_id from security where isin='US87973RAA86'), (SELECT counter_party_id from counter_party where bond_holder='Zurich Pension fund 4'), 'buy', 'USD', 60, '2021-09-27', 'open', '2012-02-04', 100.13);
INSERT into trades (book_id, security_id, counterparty_id, trade_type, trade_currency, quantity, trade_settlement_date, trade_status, trade_date, unit_price) VALUES ((SELECT book_id from book where name='trading_book_4'), (SELECT security_id from security where isin='US87973RAA86'), (SELECT counter_party_id from counter_party where bond_holder='Zurich Pension fund 4'), 'buy', 'USD', 50, '2021-08-23', 'open', '2014-08-23', 100.13);
INSERT into trades (book_id, security_id, counterparty_id, trade_type, trade_currency, quantity, trade_settlement_date, trade_status, trade_date, unit_price) VALUES ((SELECT book_id from book where name='trading_book_4'), (SELECT security_id from security where isin='US87973RAA86'), (SELECT counter_party_id from counter_party where bond_holder='Zurich Pension fund 4'), 'buy', 'USD', 75, '2021-09-27', 'open', '2013-02-04', 100.13);
INSERT into trades (book_id, security_id, counterparty_id, trade_type, trade_currency, quantity, trade_settlement_date, trade_status, trade_date, unit_price) VALUES ((SELECT book_id from book where name='trading_book_4'), (SELECT security_id from security where isin='US87973RAA86'), (SELECT counter_party_id from counter_party where bond_holder='Zurich Pension fund 4'), 'buy', 'USD', 50, '2021-08-23', 'open', '2014-08-23', 100.13);
INSERT into trades (book_id, security_id, counterparty_id, trade_type, trade_currency, quantity, trade_settlement_date, trade_status, trade_date, unit_price) VALUES ((SELECT book_id from book where name='trading_book_4'), (SELECT security_id from security where isin='IE00B29LNP31'), (SELECT counter_party_id from counter_party where bond_holder='Zurich Pension fund 4'), 'buy', 'USD', 300, '2021-09-27', 'open', '2016-02-04', 98.76);
INSERT into trades (book_id, security_id, counterparty_id, trade_type, trade_currency, quantity, trade_settlement_date, trade_status, trade_date, unit_price) VALUES ((SELECT book_id from book where name='trading_book_4'), (SELECT security_id from security where isin='IE00B29LNP31'), (SELECT counter_party_id from counter_party where bond_holder='Zurich Pension fund 4'), 'buy', 'USD', 300, '2021-08-23', 'open', '2012-08-23', 98.76);
INSERT into trades (book_id, security_id, counterparty_id, trade_type, trade_currency, quantity, trade_settlement_date, trade_status, trade_date, unit_price) VALUES ((SELECT book_id from book where name='trading_book_4'), (SELECT security_id from security where isin='IE00B29LNP31'), (SELECT counter_party_id from counter_party where bond_holder='Zurich Pension fund 4'), 'buy', 'USD', 300, '2021-09-27', 'open', '2013-02-04', 98.76);
INSERT into trades (book_id, security_id, counterparty_id, trade_type, trade_currency, quantity, trade_settlement_date, trade_status, trade_date, unit_price) VALUES ((SELECT book_id from book where name='trading_book_4'), (SELECT security_id from security where isin='IE00B29LNP31'), (SELECT counter_party_id from counter_party where bond_holder='Zurich Pension fund 4'), 'sell', 'USD', 300, '2021-08-23', 'open', '2015-08-23', 98.76);


