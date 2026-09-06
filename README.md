# URL Shortener

A simple backend URL Shortener API built with **Node.js, Express.js, MongoDB, Mongoose, and Nanoid**.

The application converts long URLs into short URLs and redirects users from the generated short URL to the original URL.

## Features

* Create a short URL from an original URL
* Generate a unique short code for every URL
* Store URL mappings in MongoDB
* Redirect short URLs to their original URLs
* Validate URLs before creating short links
* Support both `http` and `https` URLs
* Return appropriate HTTP status codes for invalid or missing URLs
* Automatically store `createdAt` and `updatedAt` timestamps
* Environment variables for configuration
* MongoDB unique constraint for short codes

## Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **Nanoid**
* **dotenv**

## Project Structure

```text
CodeAlpha_URLShortener/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── url.controller.js
│   ├── models/
│   │   └── url.model.js
│   ├── routes/
│   │   └── urls.route.js
│   └── app.js
├── server.js
├── .env
├── .gitignore
├── package.json
└── package-lock.json
```

## Installation

Clone the repository:

```bash
git clone https://github.com/AakashKachhi/CodeAlpha_Simple-URL-Shortener
```

Move into the project directory:

```bash
cd CodeAlpha_URLShortener
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root directory:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

Do not commit the `.env` file to GitHub.

## Running the Project

### Development

```bash
npm run dev
```

### Production

```bash
npm start
```

The server will run on:

```text
http://localhost:3000
```

## API Endpoints

### 1. Create Short URL

**POST**

```text
/api/urls
```

#### Request Body

```json
{
  "originalUrl": "https://www.example.com"
}
```

#### Successful Response

**Status:** `201 Created`

```json
{
  "message": "Create short url successfully",
  "originalUrl": "https://www.example.com",
  "shortUrl": "http://localhost:3000/api/urls/abc123",
  "shortCode": "abc123",
  "createdAt": "2026-09-06T10:42:31.870Z"
}
```

### 2. Redirect to Original URL

**GET**

```text
/api/urls/:shortCode
```

Example:

```text
http://localhost:3000/api/urls/abc123
```

If the short code exists, the API redirects the request to the original URL.

If the short code does not exist:

**Status:** `404 Not Found`

```json
{
  "message": "This record is not available"
}
```

## URL Validation

The API accepts URLs using:

* `http://`
* `https://`

Invalid or unsupported URLs return:

**Status:** `400 Bad Request`

## Error Handling

The API handles common errors with appropriate HTTP status codes:

| Status Code | Description                    |
| ----------- | ------------------------------ |
| `201`       | Short URL created successfully |
| `400`       | Invalid or missing URL         |
| `404`       | Short code not found           |
| `500`       | Database/server error          |

## Database

MongoDB is used to store URL mappings.

Each URL record contains:

* `originalUrl`
* `shortUrl`
* `shortCode`
* `createdAt`
* `updatedAt`

The `shortCode` field is unique to prevent duplicate short codes.

## Future Improvements

Possible future enhancements include:

* User authentication
* URL expiration
* Click analytics
* Click tracking
* Custom short codes
* QR code generation
* Rate limiting
* API documentation
* Frontend interface
* Admin dashboard

## Internship Task

This project was developed as part of the **CodeAlpha Backend Development Internship**.

**Task:** Simple URL Shortener
