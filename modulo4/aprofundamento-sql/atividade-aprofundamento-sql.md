## <p align="center">Atividade de Aprofundamento SQL</p>

```
USE `ailton-paulo-henrique`;
```

```
SET SQL_SAFE_UPDATES = 0;
```

### Indo para o RH.

```
select * from Actor;
select * from Movies;
```

### Exe 1

```
ALTER TABLE Actor
ADD favorite_ice_cream_flavor VARCHAR(255);

ALTER TABLE Actor
ADD type VARCHAR(255) DEFAULT "NotDirector";
```

#### a)

```
ALTER TABLE Actor DROP COLUMN salary;
```

#### Este comando altera a tabela, retirando a coluna salary da tabela.

#### b)

```
ALTER TABLE Actor
CHANGE gender sex VARCHAR(6);
```

#### Este comando altera a tabela mundado o nome da coluna gender para sex e definindo seu tipo (mesmo que seja o que já estavá anteriormente).

#### c)

```
ALTER TABLE Actor
CHANGE gender gender VARCHAR(255);
```

#### Este comando altera a tabela mudando a quantidade de caracteres do seu tipo VARCHAR para 255.

#### d)

```
ALTER TABLE Actor
CHANGE gender gender VARCHAR(100);
```

### Exe 2

#### a)

```
UPDATE Actor
SET name = "Antonio Fagundes",	birth_date = "1950-06-02"
WHERE id = "004";
```

#### b)

```
UPDATE Actor
SET name = UPPER(name)
WHERE name = "Paulo Henrique";

UPDATE Actor
SET name = "Paulo Henrique"
WHERE name = UPPER("Paulo Henrique");
```

#### c)

```
UPDATE Actor
SET
     name = "Paulo Henrique",
     salary = 10,
     birth_date = "1995-10-11",
     gender = "male",
     favorite_ice_cream_flavor = "Tamarindo"
WHERE id = "005";
```

#### d)

```
UPDATE Actor
SET
     name = "Paulo Henrique",
     salary = 10, birth_date = "1995-10-11",
     gender = "male",
     favorite_ice_cream_flavor = "Tamarindo"
WHERE id = "006";
```

#### Comando é executado mas nada é alterado, fato disso acontecer vem da condição WHERE que só altera aquilo que é encontrado dentro da tabela com aquela condição informada, sendo assim, como não existe o valor nada é alterado e nenhum erro.

### Exe 3

```
DELETE FROM Actor
WHERE name = "Tony Ramos";
```

#### a)

```
DELETE FROM Actor
WHERE name = "Fernanda Montenegro";
```

#### b)

```
DELETE FROM Actor
WHERE gender = "male"
AND salary > 1000000;
```

### Exe 4

```
SELECT COUNT(*) FROM Actor;
```

#### Quantidade de atores.

```
SELECT COUNT(*) FROM Actor
WHERE gender = "female";
```

#### Quantidade de atrizes.

```
SELECT AVG(salary) FROM Actor;
```

#### Média dos salários.

#### a)

```
SELECT MAX(salary) FROM Actor;
```

#### b)

```
SELECT MIN(salary) FROM Actor
WHERE gender = "female";
```

#### c)

```
SELECT COUNT(*) FROM Actor
WHERE gender = "female";
```

#### d)

```
SELECT SUM(salary) FROM Actor;
```

### Exe 5

```
SELECT * FROM Actor LIMIT 3;
```

#### Pegando 3 atores da tabela.

```
SELECT * FROM Actor ORDER BY name ASC;
```

#### Ordenando a Tabela em ordem alfabética.

```
SELECT * FROM Actor ORDER BY name ASC LIMIT 4;
```

#### Pegando os atores em ordem alfabética e somente 4.

```
SELECT * FROM Actor WHERE gender = 'female'
ORDER BY name ASC LIMIT 4;
```

#### Pegando os atrizes em ordem alfabética e somente 4.

```
SELECT COUNT(*), gender FROM Actor GROUP BY gender;
```

#### Comando retorna a quantidade de pessoas por gênero.

#### a)

#### Esta query irá retornar a quantidade de pessoas por gênero.

#### b)

```
SELECT id, name FROM Actor ORDER BY name DESC;
```

#### c)

```
SELECT * FROM Actor ORDER BY salary;
```

#### d)

```
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
```

#### e)

```
SELECT AVG(salary), gender FROM Actor GROUP BY gender;
```

### Exe 6

#### a)

```
ALTER TABLE Movies
ADD playing_limit_date DATE DEFAULT "2022-12-22";
```

#### b)

```
ALTER TABLE Movies CHANGE score score FLOAT;
```

#### c)

```
UPDATE Movies
SET playing_limit_date = "2023-01-15"
WHERE id = "001";

UPDATE Movies
SET playing_limit_date = "2022-06-15"
WHERE id = "003";
```

#### d)

```
DELETE FROM Movies WHERE id = "002";
```

#### Deletado.

```
UPDATE Movies SET synopsis = "Nova sinopse" WHERE id = "002";
```

#### Comando é executado mas nada é alterado, fato disso acontecer vem da condição WHERE que só altera aquilo que é encontrado dentro da tabela com aquela condição informada, sendo assim, como não existe o valor nada é alterado e nenhum erro.

### Exe 7

#### a)

```
SELECT COUNT(*) FROM Movies WHERE score > 7.5;
```

#### b)

```
SELECT AVG(score) FROM Movies;
```

#### c)

```
SELECT COUNT(*) FROM Movies
WHERE playing_limit_date > CURDATE();
```

#### d)

```
SELECT COUNT(*) FROM Movies
WHERE release_date > CURDATE();
```

#### e)

```
SELECT MAX(score) FROM Movies;
```

#### f)

```
SELECT MIN(score) FROM Movies;
```

### Exe 8

#### a)

```
SELECT * FROM Movies ORDER BY movie;
```

#### b)

```
SELECT * FROM Movies ORDER BY movie LIMIT 5;
```

#### c)

```
SELECT * FROM Movies
WHERE release_date < CURDATE()
ORDER BY release_date DESC LIMIT 3;
```

#### d)

```
SELECT * FROM Movies ORDER BY score DESC LIMIT 3;
```

```
SET SQL_SAFE_UPDATES = 1;
```

### Era engano, não preciso ir ao RH.
