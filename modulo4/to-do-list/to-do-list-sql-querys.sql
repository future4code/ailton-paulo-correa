-- Select All Users
SELECT * FROM Users;
SELECT * FROM Tasks;

-- Create Table Users
CREATE TABLE Users (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    nickname VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

-- Create Table Tasks
CREATE TABLE Tasks (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    limitDate VARCHAR(255) NOT NULL,
    creatorUserId VARCHAR(255) NOT NULL,
    FOREIGN KEY (creatorUserId)
        REFERENCES Users (id)
);
