# Ryo Portfolio

A vinyl-inspired personal portfolio built from scratch while learning full-stack web development.

The project combines a responsive HTML, CSS, and JavaScript frontend with a Flask backend and SQLite database. It is designed to showcase projects and experience through interactive record-style artwork while providing a working contact form.

## Features

- Responsive portfolio layout for desktop and mobile screens
- Custom typography, logos, favicon, and colour palette
- Full-screen background video that fades as the page scrolls
- Layered vinyl artwork with a rotating disc and stationary reflection
- Project and experience sections with reusable record components
- Asynchronous contact form using the browser Fetch API
- Server-side form validation with JSON responses
- Contact message storage in a local SQLite database
- Semantic HTML and accessibility attributes for decorative media

## Tech Stack

| Layer | Technologies |
| --- | --- |
| Frontend | HTML5, CSS3, JavaScript |
| Backend | Python, Flask, Jinja |
| Database | SQLite, SQL |
| Development | Git, GitHub, VS Code |

## Architecture

```text
Browser
  |-- HTML structure and Jinja-generated asset URLs
  |-- CSS layout, vinyl layers, typography, and animation
  |-- JavaScript scroll effects and form handling
  |
  `-- POST /api/contact
          |
          v
      Flask validation
          |
          v
      SQLite contact_messages table
```

Flask renders the main page from `templates/index.html`. JavaScript collects contact form values and sends them to `/api/contact` as JSON. Flask validates the request and inserts valid messages into SQLite using a parameterised SQL query.

## Project Structure

```text
ryo-portfolio/
|-- README.md
|-- .gitignore
`-- workshop/
    |-- app.py
    |-- init_db.py
    |-- requirements.txt
    |-- database/
    |   `-- schema.sql
    |-- templates/
    |   `-- index.html
    `-- static/
        |-- css/
        |   `-- style.css
        |-- fonts/
        |-- images/
        `-- js/
            `-- main.js
```

The generated `portfolio.db` file is excluded from Git. It can be recreated locally from `database/schema.sql` by running `init_db.py`.

## Local Setup

### 1. Clone the repository

```powershell
git clone https://github.com/ryokusakari/ryo-portfolio.git
cd ryo-portfolio\workshop
```

### 2. Create and activate a virtual environment

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

### 3. Install the Python dependencies

```powershell
python -m pip install -r requirements.txt
```

### 4. Initialise the database

```powershell
python init_db.py
```

Expected output:

```text
Database initialised.
```

### 5. Start Flask

```powershell
python app.py
```

Open `http://127.0.0.1:5000` in a browser.

## Contact API

The contact form submits JSON to:

```http
POST /api/contact
Content-Type: application/json
```

Example request body:

```json
{
  "name": "Ryo",
  "email": "name@example.com",
  "message": "Hello"
}
```

Successful submissions are stored with an automatically generated ID and timestamp.

## Development Status

The portfolio currently runs locally with its frontend, Flask contact API, and SQLite storage connected end to end.

Planned work includes:

- OpenAI-powered portfolio assistant
- Production deployment and environment configuration
- Expanded project and experience content
- Automated backend and frontend tests
- Further media optimisation and accessibility testing

## Learning Goals

This repository documents the process of learning how each layer of a web application communicates, including:

- Structuring content with semantic HTML
- Building responsive layouts and animations with CSS
- Manipulating the DOM and making asynchronous requests with JavaScript
- Designing Flask routes and JSON APIs in Python
- Creating and querying a relational database with SQL
- Managing changes with Git branches, tags, commits, and GitHub

## Author

Ryo Kusakari  
[GitHub](https://github.com/ryokusakari)
