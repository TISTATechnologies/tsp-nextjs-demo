# Server

This is the development server.

The API url routes mimic the folder structure in `application`.

## Installation

Use `npm install` in this directory.

## Usage

Use `npm start` in this directory. This will build the server and start it on port 4040.

Use postman or some other http client to populate the database. The following POST message will work. Change the host to wherever the backend is running.

```
POST http://localhost:4040/users
Content-Type: application/json

{
    "name": "John"
}
```

Additionally, you can add tags to users using below.

```
POST http://localhost:4040/users/<user_id>/tags
Content-Type: application/json

{
    "description": "Developer"
}
```
