CREATE TABLE posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    description TEXT,
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    tags VARCHAR(255)[],
    location VARCHAR(255),
    company_name VARCHAR(255),
    job_title VARCHAR(255),
    salary_min INTEGER,
    salary_max INTEGER
)