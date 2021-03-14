CREATE DATABASE cityweather

CREATE TABLE city(
  city_id SERIAL PRIMARY KEY,
  city VARCHAR(20),
  country VARCHAR(20),
  description VARCHAR(20),
  temperature NUMERIC(4,2),
  humidity NUMERIC(4,2),
)