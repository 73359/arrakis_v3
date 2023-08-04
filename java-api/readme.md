# Bonds API

The Bonds API is a Java-based API that provides various endpoints to manage and retrieve information related to bonds, trades, and counterparties.

## Table of Contents

- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Technologies

- Java
- Spring Boot
- Spring Data JPA
- JUnit
- Maven

## Getting Started

To get started with the project, make sure you have Java and Maven installed on your machine. Clone the repository to your local system.

## Installation

1. Clone the repository:

```
git clone https://github.com/73359/arrakis_v3.git
cd arrakis_v3
```

2. Build the project using Maven:

```
mvn clean install
```

3. Run the application:

```
mvn spring-boot:run
```

The API server will start, and you can access it at `http://localhost:8080/api/v1/`.

## Usage

The Bonds API provides various endpoints to interact with the data. You can use tools like Postman or cURL to make HTTP requests to the API. The API supports the following endpoints:

- `GET /api/v1/bonds/active`: Get a list of active bonds.
- `GET /api/v1/bonds/{security_id}/trades/for/{user_id}`: Get trades for a specific bond and user.
- `GET /api/v1/bonds/duetomature`: Get a list of bonds due to mature soon.
- `GET /api/v1/bondholder/{trade_id}`: Get the counterparty (bond holder) for a specific trade.
- `GET /api/v1/bonds/from/responsible/books/{user_id}`: Get bonds from the responsible books for a user.

## API Endpoints

### Get Active Bonds

```
GET /api/v1/bonds/active
```

Returns a list of active bonds.

### Get Bond Trades

```
GET /api/v1/bonds/{security_id}/trades/for/{user_id}
```

Returns trades for a specific bond and user.

### Get Bonds Due to Mature

```
GET /api/v1/bonds/duetomature
```

Returns a list of bonds due to mature soon.

### Get Bondholder

```
GET /api/v1/bondholder/{trade_id}
```

Returns the counterparty (bond holder) for a specific trade.

### Get Bonds from Responsible Books

```
GET /api/v1/bonds/from/responsible/books/{user_id}
```

Returns bonds from the responsible books for a user.

---