~~~ SQL
SELECT * FROM Actor;
SELECT * FROM Movies;
SELECT * FROM Rating;
SELECT * FROM MovieCast;
~~~
~~~ SQL
USE `ailton-paulo-henrique`;
~~~ 
### Exe 1
~~~ SQL
CREATE TABLE Rating (
    id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
    rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id)
        REFERENCES Movies (id)
);
~~~
### a)
#### Chave estrangeira é um valor que referencia a chave primaria de uma tabela para a tabela onde está sendo criada.

### b)
~~~ SQL
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES ("001","Muito bom, nota 1",1,"001");

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES ("002","Um filme já feito",5,"003");

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES ("003","Muito bom",9,"004");

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES ("004","Bom",6,"004");

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES ("005","Muito bom",7,"004");
~~~ 
### c)
~~~ SQL
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES ("004","Melhor filme já feito!",100,"002");
~~~ 
#### Erro ocorre pelo fato de não existir um id com o valor informado, não tem como referenciar algo que não existe.

### d)
~~~ SQL
ALTER TABLE Movies DROP COLUMN score;
~~~ 

### e)
~~~ SQL
DELETE FROM Movies 
WHERE
    movie = 'Se Eu Fosse Você';
~~~
#### o acontece pelo fato que id do filme está referenciado em outra tabela(FK), para deletar esse filme é importante antes deletar o tirar a referencia criada com seu id em outra tabela.

### Exe 2
~~~ SQL
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
~~~
### a)
#### Essa query irá criar uma tabela que pega por referencia dois id, sendo uma da tabela Movies e a outra da tabela Actor, basicamente uma tabela que mostra um filme e o ator principal.

### b)
~~~ SQL
INSERT INTO MovieCast(movie_id, actor_id)
VALUES("004","123");

INSERT INTO MovieCast(movie_id, actor_id)
VALUES("004","005");

INSERT INTO MovieCast(movie_id, actor_id)
VALUES("004","002");

INSERT INTO MovieCast(movie_id, actor_id)
VALUES("003","004");

INSERT INTO MovieCast(movie_id, actor_id)
VALUES("003","002");

INSERT INTO MovieCast(movie_id, actor_id)
VALUES("001","1661360901513");
~~~
### c)
~~~ SQL
INSERT INTO MovieCast(movie_id, actor_id)
VALUES("003","001");
~~~ 
#### Erro ocorre pelo fato de não existir um id com o valor informado, não tem como referenciar algo que não existe.

### d)
~~~ SQL
DELETE FROM Actor 
WHERE
    id = '004';
~~~ 
#### Erro acontece pelo fato que id do ator está referenciado em outra tabela(FK), para deletar esse ator é importante antes deletar o tirar a referencia criada com seu id em outra tabela.

### 3)
~~~ SQL
SELECT 
    *
FROM
    Movies
        INNER JOIN
    Rating ON Movies.id = Rating.movie_id;
~~~
### a)
#### Operador conecta os id encontrado de forma correta, como informada na condição.

### b)
~~~ SQL
SELECT 
    Rating.movie_id as Id, movie as Movie, Rating.rate as Score
FROM
    Movies
        INNER JOIN
    Rating ON Movies.id = Rating.movie_id;
~~~ 
### Exe 4
### a)
~~~ SQL
SELECT 
    Rating.id AS Id,
    movie AS Movie,
    Rating.rate AS Score,
    Rating.comment AS Comment
FROM
    Movies
        LEFT JOIN
    Rating ON Movies.id = Rating.movie_id;
~~~ 
### b)
~~~ SQL
SELECT 
    MovieCast.movie_id AS Id, movie AS Movie, MovieCast.actor_id
FROM
    Movies
        RIGHT JOIN
    MovieCast ON MovieCast.movie_id = Movies.id;
~~~ 
### c)
~~~ SQL
SELECT 
    AVG(Rating.rate) AS Average,
    Rating.movie_id AS Id,
    movie AS Movie
FROM
    Movies
        LEFT JOIN
    Rating ON Movies.id = Rating.movie_id
GROUP BY (Movies.movie);
~~~ 
### Exe 5
~~~ SQL
SELECT 
    *
FROM
    Movies
        LEFT JOIN
    MovieCast ON Movies.id = MovieCast.movie_id
        JOIN
    Actor ON Actor.id = MovieCast.actor_id;
~~~ 
### a)
#### Join ajuda a conectar os pontos confome as condições sejam informadas corretamentes.

### b)
~~~ SQL
SELECT 
    MovieCast.movie_id AS Movie_Id,
    movie AS Movie,
    MovieCast.actor_id AS Actor_Id,
    Actor.name AS Name
FROM
    Movies
        LEFT JOIN
    MovieCast ON Movies.id = MovieCast.movie_id
        JOIN
    Actor ON Actor.id = MovieCast.actor_id;
~~~ 
### c)
~~~ SQL
SELECT 
    m.id AS movie_id, m.movie, a.id AS actor_id, a.name
FROM
    Movies m
        LEFT JOIN
    MovieCast mc ON m.id = mc.movie_id
        JOIN
    Actor a ON a.id = mc.actor_id;
~~~ 
#### Essa query retorna o filme quantas vezes for necessario, até apresentar todos os atores relacionados com determinado filme.

~~~ SQL
SELECT 
    MovieCast.movie_id AS Movie_Id,
    movie AS Movie,
    MovieCast.actor_id AS Actor_Id,
    Actor.name AS Name,
    Rating.rate AS Score,
    Rating.comment AS Comment
FROM
    Movies
        LEFT JOIN
    Rating ON Rating.movie_id = Movies.id
        LEFT JOIN
    MovieCast ON Movies.id = MovieCast.movie_id
        JOIN
    Actor ON Actor.id = MovieCast.actor_id
~~~ 