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
-- Colocando nova coluna, situação da Tarefa
ALTER TABLE Tasks
ADD status VARCHAR(255) DEFAULT "a fazer";

-- Create Table Responsible Task
CREATE TABLE Responsible (
    id VARCHAR(255) PRIMARY KEY,
    task_id VARCHAR(255) NOT NULL,
    responsible_user_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (task_id)
        REFERENCES Tasks (id),
    FOREIGN KEY (responsible_user_id)
        REFERENCES Users (id)
);
