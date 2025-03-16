# User Authentication and Session Management: A Guide to Implementation

## Objective

This project aims to equip you with the skills and knowledge to implement secure user authentication and session management in a web application. The primary objectives include:

- Understanding and implementing secure user registration and login processes.
- Mastering the use of JWTs for session management and access control.
- Implementing robust security measures to protect user data and prevent common vulnerabilities.
- Gaining practical experience with database interactions for user data storage (using SQLite).
- Developing skills in testing and logging authentication and session-related functionalities.
- Understanding password reset flows with time-limited tokens.

## Step-by-Step Instructions

### Project Setup and Initialization

1. **Create Project Directory**: 
    ```bash
    mkdir auth-app
    cd auth-app
    ```

2. **Initialize Node.js Project**: 
    ```bash
    npm init -y
    ```

3. **Install Dependencies**: 
    ```bash
    npm install express sqlite3 jsonwebtoken bcrypt nodemailer
    ```

4. **Configure Project Structure**: 
    ```text
    auth-app/
    ├── models/
    ├── routes/
    ├── middleware/
    ├── controllers/
    ├── utils/
    ├── tests/
    ├── app.js
    ├── package.json
    └── database.db
    ```

5. **Set up SQLite Database**: Ensure SQLite command-line tool is installed and create an empty database file in the project root (e.g., `database.db`).

### Development Process

#### Database Model Creation (User)
- Define the database schema for the user model in the `models` directory using SQLite.

#### User Registration Implementation
- Create a registration route in the `routes` directory (e.g., `/register`).
- Create a registration controller function in the `controllers` directory.

#### User Login Implementation
- Create a login route in the `routes` directory (e.g., `/login`).
- Create a login controller function in the `controllers` directory.

#### Session Management Implementation
- Configure your Express application to use middleware for parsing cookies or handling the JWT from the response body.
- Implement a middleware function to verify the JWT on protected routes.

#### Access Control Implementation
- Apply the JWT verification middleware to the routes that require authentication.

#### Password Reset Implementation
- Create a "forgot password" route in the `routes` directory (e.g., `/forgot-password`).
- Create a controller function to handle password reset requests and form submissions.

#### Security Measures Implementation
- Use bcrypt with sufficient salt rounds to securely hash user passwords.
- Configure your Express application to use HTTPS.
- Implement robust input sanitization and validation.

#### Logging Implementation
- Install a logging library such as Winston or Morgan.
- Configure the logging library to write logs to a file or a centralized logging service.

#### Testing Implementation
- Use a testing framework such as Mocha or Jest.
- Write unit and integration tests to verify functionality.

### Styling and Design

- Choose a styling approach (CSS, Sass, Less, Bootstrap, Tailwind CSS).
- Create and style necessary HTML templates.

### Deployment

1. **Choose a Hosting Platform**: Select a suitable hosting platform (e.g., Heroku, AWS, VPS).
2. **Configure Environment Variables**: Set up environment variables for your application.
3. **Deploy Application**: Deploy your application to the chosen hosting platform.
4. **Configure HTTPS**: Ensure that your application is served over HTTPS.
5. **Database Configuration**: Configure your application to connect to the SQLite database.

### Submission Guidelines

- Submit your complete project codebase, including all source code, configuration files, and test cases.
- Include a `README.md` file with clear instructions on how to run the application and execute the tests.
- Ensure your code is well-commented and easy to understand.
- Submit the project as a zipped archive (.zip or .tar.gz) or as a link to a public Git repository.
- Adhere to the coding standards and best practices outlined in the course materials.

