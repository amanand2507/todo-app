
# MERN Todo App

This Todo App is a comprehensive application offering a wide range of features including user authentication, profile management, and extensive CRUD operations for managing todos. It's built on the MERN stack (MongoDB, Express.js, React.js, Node.js), ensuring a modern, full-stack experience.


# Deployed at [Todo-app](https://todo-app-s90y.onrender.com/)
## Features

- **User Authentication**
- **Profile Management**
- **Password Management**
- **Todo Management**
- **Todo Status**
- **Todo Sections**
- **Extensibility**
- **Custom 404 Page**

## Technologies
- **Frontend**: React.js, HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Password Encryption**: bcrypt
- **Other Dependencies**: cookie-parser, password-validator, cors

## API Endpoints

- `GET /check-auth` - Checks user authentication status.
- `POST /signup` - Registers a new user.
- `POST /login` - Authenticates a user.
- `GET /logout` - Logs out a user.
- `GET /user` - Fetches user profile information.
- `PUT /user/update` - Updates user profile.
- `DELETE /user/delete` - Deletes a user account.
- `POST /addtodo` - Adds a new todo.
- `GET /todos` - Retrieves all todos.
- `GET /completedTodos` - Fetches completed todos.
- `GET /pendingTodos` - Fetches pending todos.
- `PUT /todo/updateStatus` - Updates the status of a todo.
- `PUT /todo/update` - Modifies a todo.
- `DELETE /todo/delete` - Removes a todo.

## Usage

To get the MERN Todo App running locally, follow these steps:

### Start the Backend Server

1. Create a `.env` file in the root directory with the following content:
   ```
   PORT=5000
   MONGO_URI=<your_mongodb_cloud_url>
   CLIENT_URL=http://localhost:5173
   SECRET=<your_secret>
   ```
2. Install the node packages:
   ```
   npm i
   ```

2. Start the backend:
   ```
   npm run server
   ```

### Start the Frontend Server

3 Start the development server:
   ```bash
   npm run client
   ```

### Accessing the App

- Open your web browser and go to [http://localhost:5173](http://localhost:5173) to start using the MERN Todo App.

