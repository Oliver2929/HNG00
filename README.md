# Express API with CORS

## Description

This is a simple Express-based API that responds with basic information, including an email address, current date-time, and a GitHub URL. CORS (Cross-Origin Resource Sharing) is enabled to allow requests from different origins.

## Setup Instructions

-**Clone the repository:** 'git clone https://github.com/Oliver2929/HNG00.git' and then cd HNG00

-**Install dependencies:** npm install

-**Start the server:** npm start

-**Access the API via browser or HTTP client:** e.g., Postman, Insomnia

## API Documentation

-**Endpoint URL:** `GET /`

-**Request Format:**

- Method: GET
- URL: 'http://localhost:3000/'
- Headers: No special headers required (CORS enabled)

-**Response Format:** The response is a JSON object with the following structure:

```json
{
  "email": "fowosereademola@gmail.com",
  "current_datetime": "2025-01-29T00:00:00.000Z",
  "github_url": "https://github.com/Oliver2929/HNG00.git"
}
```

-email: A string representing an email address.

-current_datetime: A string representing the current date and time in ISO 8601 format.

-github_url: A string containing the URL of the project's GitHub repository.

-**Example Usage:**

- curl https://hngproject0.vercel.app
- Response:

```json
{
  "email": "fowosereademola@gmail.com",
  "current_datetime": "2025-01-30T10:39:29.583Z",
  "github_url": "https://github.com/Oliver2929/HNG00.git"
}
```

## Prepare for Deployment (Vercel)

-**Install Vercel CLI:**

```bash
npm install -g vercel
```

[Node.js Developer](https://hng.tech/hire/nodejs-developers)
