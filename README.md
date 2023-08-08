### Backend Java Spring Boot Project

# Bond Tracking Service - Backend

This is the backend component of the Bond Tracking Service application. It is developed using Java Spring Boot framework to provide API endpoints for managing bond data and related operations.

## Getting Started

These instructions will help you set up and run the backend of the Bond Tracking Service on your local machine for development and testing purposes.

### Prerequisites

- Java Development Kit (JDK) 8 or higher
- Apache Maven

### Installing

1. Clone the repository to your local machine:

```bash
git clone https://github.com/73359/arrakis_v3.git
```

2. Navigate to the project directory:

```bash
cd arrakis_v3/java-api
```

3. Build and run the application using Maven:

```bash
mvn spring-boot:run
```

The backend server will start on `http://localhost:8080`.

## Features

- Retrieve active bonds, bond trades, and related information.
- Filter bonds by different criteria.
- Fetch bondholder information.
- Monitor bonds due to mature.

## Technologies Used

- Java Spring Boot
- Spring Data JPA
- Swagger UI (API documentation)
- MySQL (Database)

### Frontend React Application

# Bond Tracking Service - Frontend

This is the frontend component of the Bond Tracking Service application. It is developed using React framework to provide a user-friendly interface for managing bond data and related operations.

## Getting Started

These instructions will help you set up and run the frontend of the Bond Tracking Service on your local machine for development and testing purposes.

### Prerequisites

- Node.js (LTS version recommended)
- npm (Node Package Manager)

### Installing

1. Clone the repository to your local machine:

```bash
git clone https://github.com/73359/arrakis_v3.git
```

2. Navigate to the project directory:

```bash
cd arrakis_v3/react-app
```

3. Install dependencies using npm:

```bash
npm install
```

4. Run the application:

```bash
npm start
```

The frontend server will start on `http://localhost:3000`.

## Features

- User authentication using Firebase
- Display active bonds with various filters
- View bond trade details and bondholder information
- Responsive user interface

## Technologies Used

- React
- React Router DOM
- React Bootstrap
- Firebase Authentication
- Axios (HTTP requests)

## Authors

- Shreya Chauhan - [@ShreyaaChauhan](https://github.com/ShreyaaChauhan)
- Hiten Rana - [@ranahiten8](https://github.com/ranahiten8)
- Serhat Kir - [@kirserhat](https://github.com/kirserhat)
- Jack Murphy - [@jack494088](https://github.com/jack494088)
- Michael Uhl - [@73359](https://github.com/73359)
