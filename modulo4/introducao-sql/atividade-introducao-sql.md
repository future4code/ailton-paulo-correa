```
USE `ailton-paulo-henrique`;
```

### Exe 1

```
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
```

### a)

#### PRIMARY KEY é uma chave unica que define uma valor importante e que não irá se repitir em nnenhum outro dado;

#### VARCHAR é um tipo de dado, ele com ele definimos que os valores que iremos trabalhar são caracteres e podemos também definir quantos caracteres sõa possíveis de armazenar;

#### NOT NULL é uma condição para um dado, ele determina que esse valor é obrigatorio chegar ao ser armazenado, caso contrario, um erro será mostrado ao tentar armazenar novas informações;

#### DATE é uma tipo de dado, ele identifica que o valor do dado para o tipo de data.

### b)

```
SHOW DATABASES;
```

```
SHOW TABLES;
```

### c)

```
DESCRIBE Actor;
```

#### DESCRIBE é o comando que permite visualizar uma tabela em especifico com seus dados e respectivamente suas propriedades.

### Exe 2

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001",
  "Tony Ramos",
  400000,
  "1948-08-25",
  "male"
);
```

### a)

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002",
  "Glória Pires",
  1200000,
  "1963-08-23",
  "female"
);
```

### b)

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002",
  "Paulo",
  20,
  "1995-10-11",
  "male"
);
```

#### Error Code: 1062. Duplicate entry '002' for key 'PRIMARY';

#### Esse erro sinaliza que um erro de duplicata com uma primary key, isso ocorreu pelo fato que uma PK é um valor unico e que não é possível existir uma outra com o mesmo valor.

### c)

### ERRADO

```
INSERT INTO Actor (id, name, salary)
VALUES(
  "003",
  "Fernanda Montenegro",
  300000,
  "1929-10-19",
  "female"
);
```

#### Error Code: 1136. Column count doesn't match value count at row 1;

#### Esse erro acusa que existe mais valores do que foi pedido, no caso a é pedido três valores e são informado cinco valores.

### CORRIGIDO

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003",
  "Fernanda Montenegro",
  300000,
  "1929-10-19",
  "female"
);
```

### d)

### ERRADO

```
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18",
  "male"
);
```

#### Error Code: 1364. Field 'name' doesn't have a default value;

#### Esse erro acusa que o campo name não está recevendo um valor ou não tem um valor padrão, na qual foi definido anteriomente, neste caso o erro existe pelo fato de não termos colocado o name nos pedidos(insert into) e realmente não passamos um valor dele no values.

### CORRIGIDO

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Nome",
  400000,
  "1949-04-18",
  "male"
);
```

### e)

### ERRADO

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005",
  "Juliana Paes",
  719333.33,
  1979-03-26,
  "female"
);
```

#### Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1;

#### Erro originado pela Data, o valor informado não estava entre aspas.

### CORRIGIDO

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005",
  "Juliana Paes",
  719333.33,
  "1979-03-26",
  "female"
);
```

### Exe 3

```
SELECT * FROM Actor;
```

```
SELECT id, salary from Actor;
```

```
SELECT id, name from Actor WHERE gender = "male";
```

### a)

```
SELECT id, name from Actor WHERE gender = "female";
```

### b)

```
SELECT name, salary from Actor WHERE name = "Tony Ramos";
```

### c)

```
SELECT * from Actor WHERE gender = "invalid";
```

### d)

```
SELECT id, name, salary from Actor WHERE salary <= 500000;
```

### e)

```
SELECT id, name from Actor WHERE id = "002";
```

### Exe 4

```
SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
```

### a)

#### Query anterior busca por valores na qual o name inicia com a letra A ou J.

### b)

```
SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;
```

### c)

```
SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%";
```

### d)

```
SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND (salary BETWEEN 350000 AND 900000);
```

### Exe 5

### a)

```
CREATE TABLE Movies (
    id VARCHAR(255) PRIMARY KEY,
    movie VARCHAR (255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    score INT NOT NULL
);
```

#### Query está criando uma tabela de filmes com 5 valores, todos definidos com necessarios, onde id e movie são unicos e não podem repitir.

### b)

```
INSERT INTO Movies (id, movie, synopsis, release_date, score)
VALUES(
  "001",
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06",
  7
);
```

### c)

```
INSERT INTO Movies (id, movie, synopsis, release_date, score)
VALUES(
  "002",
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27",
  10
);
```

### d)

```
INSERT INTO Movies (id, movie, synopsis, release_date, score)
VALUES(
  "003",
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02",
  8
);
```

### e)

```
INSERT INTO Movies (id, movie, synopsis, release_date, score)
VALUES(
  "004",
  "Tropa de Elite",
  "Nascimento, capitão da Tropa de Elite do Rio de Janeiro, é designado para chefiar uma das equipes que tem como missão apaziguar o Morro do Turano. Ele precisa cumprir as ordens enquanto procura por um substituto para ficar em seu lugar. Em meio a um tiroteio, Nascimento e sua equipe resgatam Neto e Matias, dois aspirantes a oficiais da PM. Ansiosos para entrar em ação e impressionados com a eficiência de seus salvadores, os dois se candidatam ao curso de formação da Tropa de Elite.",
  "2007-10-05",
  9
);
```

### Exe 6

### a)

```
SELECT id, movie, score FROM Movies WHERE id = "004";
```

### b)

```
SELECT * FROM Movies WHERE movie = "Tropa de Elite";
```

### c)

```
SELECT id, movie, synopsis FROM Movies WHERE score >= 7;
```

### Exe 7

### a)

```
SELECT * FROM Movies WHERE movie LIKE "%vida%";
```

### b)

```
SELECT * FROM Movies WHERE movie LIKE "%de%" OR synopsis LIKE "%cimento%";
```

### c)

```
SELECT * FROM Movies WHERE release_date < "2022-08-22";
```

### d)

```
SELECT * FROM Movies WHERE release_date < "2020-05-04" AND (movie LIKE "%de%" OR synopsis LIKE "%cimento%") AND score >= 7;
```
