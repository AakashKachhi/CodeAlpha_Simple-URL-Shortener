# URL Shortener

A simple full-stack URL Shortener application built with **Node.js, Express.js, MongoDB, Mongoose, Nanoid, HTML, CSS, and JavaScript**.

The application allows users to convert long URLs into unique short URLs and redirect users to the original URL using the generated short code.

## Features

- Create a unique short URL from a long URL
- Generate a unique short code for every URL
- Store URL mappings in MongoDB
- Redirect short URLs to their original URLs
- Open an original URL using only its short code
- Validate URLs and allow only `http` and `https`
- Handle invalid URLs and unavailable short codes
- Display both the generated short URL and short code
- Copy the short URL or short code
- Responsive frontend interface
- Automatic `createdAt` and `updatedAt` timestamps
- Environment variables for configuration
- MongoDB unique constraint for short codes

## Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **Nanoid**
- **HTML**
- **CSS**
- **JavaScript**
- **dotenv**

## Project Structure

```text
CodeAlpha_URLShortener/
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
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
git clone https://github.com/AakashKachhi/CodeAlpha_Simple-URL-Shortener.git
```

Move into the project directory:

```bash
cd CodeAlpha_Simple-URL-Shortener
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

The application will be available at:

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

### 2. Redirect Using Short Code

**GET**

```text
/api/urls/:shortCode
```

Example:

```text
http://localhost:3000/api/urls/abc123
```

If the short code exists, the server redirects the user to the original URL.

If the short code does not exist:

**Status:** `404 Not Found`

```json
{
  "message": "This record is not available"
}
```

## Frontend

The frontend provides two main actions:

### Create Short URL

Enter a long URL and click **Shorten URL**.

The generated result displays:

- Short URL
- Short Code
- Copy button for the short URL
- Copy button for the short code

### Open Using Short Code

Enter an existing short code and click **Go to URL**.

The application uses the backend redirect endpoint to send the user to the original URL.

## URL Validation

The API accepts URLs using:

- `http://`
- `https://`

Invalid or unsupported URLs return:

**Status:** `400 Bad Request`

## Error Handling

| Status Code | Description |
|---|---|
| `201` | Short URL created successfully |
| `400` | Invalid or missing URL |
| `404` | Short code not found |
| `500` | Database/server error |

## Database

MongoDB is used to store URL mappings.

Each URL record contains:

- `originalUrl`
- `shortUrl`
- `shortCode`
- `createdAt`
- `updatedAt`

The `shortCode` field is unique to prevent duplicate short codes.

## Future Improvements

Possible future enhancements include:

- User authentication
- URL expiration
- Click analytics
- Click tracking
- Custom short codes
- QR code generation
- Rate limiting
- API documentation
- Admin dashboard

## Internship Task

This project was developed as part of the **CodeAlpha Backend Development Internship**.

**Task:** Simple URL Shortener

## GitHub

Repository:

https://github.com/AakashKachhi/CodeAlpha_Simple-URL-Shortener
