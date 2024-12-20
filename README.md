# TodoList Application

## Introduction
This is a simple TodoList application built with Laravel. Follow the steps below to set up and run the project locally.

---

## Requirements

Ensure you have the following installed on your system:
- PHP (version 8.1 or higher recommended)
- Composer (latest version)
- MySQL (or any database you prefer)
- A web server like Apache or Nginx (optional, for production)

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Install Dependencies
Run the following command to install all Laravel dependencies:
```bash
composer install
```

### 3. Create the `.env` File
Create a `.env` file in the root directory by copying the example file:
```bash
cp .env.example .env
```

### 4. Configure the `.env` File
Open the `.env` file in a text editor and configure the database settings. For example:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_database_user
DB_PASSWORD=your_database_password
```

### 5. Run Migrations
Set up the database tables by running migrations:
```bash
php artisan migrate
```

### 6. Serve the Application
Start the Laravel development server:
```bash
php artisan serve
```

The application will be accessible at `http://127.0.0.1:8000`.

---

## Additional Notes

### CRUD Functionality
The application includes all CRUD functionalities. However, the delete function is commented out because the frontend lacks a delete button. The current frontend was adapted from FreeFrontend, and adding a delete button was beyond the scope of this implementation. If you wish to enable the delete functionality, simply add a delete button in the frontend and set the appropriate route in the AJAX request. The backend functionality is already implemented.

### Running Tests
If there are tests included, you can run them using:
```bash
php artisan test
```

### Troubleshooting
- Ensure your `.env` file has correct database credentials.
- If you encounter permission issues, verify that your `storage` and `bootstrap/cache` directories are writable:
  ```bash
  chmod -R 775 storage bootstrap/cache
  ```

- If you need to reset the database, run:
  ```bash
  php artisan migrate:refresh
  ```

