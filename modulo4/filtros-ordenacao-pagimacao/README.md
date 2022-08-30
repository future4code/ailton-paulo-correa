<h1 align="center"> 📑Atividade de filtros, ordenação e paginação</h1>
<h3 align="center">Atividade com finalidade de compreender a fazer filtros, ordenações e paginações pelo backend.</h3>

<ul>
    <li> Utilizar **query string** para receber informações do usuário pela url do endpoint;</li>
    <li> FILTROS - Utilizar **WHERE**  e **LIKE** para fazer buscas no Banco de Dados;</li>
    <li> ORDENAÇÂO - Utilizar **ORDER BY** ... **ASC/DESC** para ordenar as buscas no Banco de Dados;</li>
    <li> PAGINAÇÃO -  Utilizar **LIMIT** para mostrar uma certa quantidade de dados por vez em cada página e **OFFSET** para navegar para as próximas páginas.</li>
</ul>

<h2>🛠️ Funcionalidades</h2>
<ul>
    <li> Pegar todos os usuários;</li>
    <li> Pegar usuários por ordem crescente ou decrescente;</li>
    <li> Pegar usuários pelo nome;</li>
    <li> Pegar usuários pelo tipo;</li>
    <li> Pegar usuários com mais de uma filtragem;</li>
    <li> Pegar cinco usuários e paginação.</li>
</ul>

<h2>📖 Documentação da API</h2>
<p>Aqui teremos as descrições para uso das endpoints!</p>
<p>Como a API não possui um link para utilização, os teste serão feitos apenas no local, então a BASE_URL será seu localhost após executar a aplicação.</p>

<br/>

> <h2>GET- Get All Users</h2>

### Path URL

```
{BASE_URL}/user/all
```

### Response

```json
// Success
{
    "message": "Usuários encontrados!",
    "data": [
        {
            "id": 1,
            "name": "Soter",
            "email": "soter@labenu",
            "type": "Teacher"
        },
        {
            "id": 2,
            "name": "João",
            "email": "joao@labenu",
            "type": "Teacher"
        }
    ]
}

// Failed
{
    "message": "Mensagem informando o erro!"
}
```

> <h2>GET- Get User Order</h2>

### Path URL

```
{BASE_URL}/user/search?columnOrder=&order=
```

### Query Params

#### `KEY` columnOrder

#### `VALUE` name

#### `KEY` order

#### `VALUE` desc

### Response

```json
// Success
{
    "message": "Usuários encontrados!",
    "data": [
        {
            "id": 18,
            "name": "Vitória",
            "email": "vitoria@labenu",
            "type": "Operations"
        },
        {
            "id": 20,
            "name": "Tainah",
            "email": "tainah@labenu",
            "type": "Operations"
        }
    ]
}

// Failed
{
    "message": "Mensagem informando o erro!"
}
```

> <h2>GET- Get Five Users per Pages  </h2>

### Path URL

```
{BASE_URL}/user/page?page=
```

### Query Params

#### `KEY` page

#### `VALUE` 4

### Response

```json
// Success
{
    "message": "",
    "data": [
        {
            "id": 16,
            "name": "Rebeca",
            "email": "rebeca@labenu",
            "type": "Operations"
        },
        {
            "id": 17,
            "name": "Jean",
            "email": "jean@labenu",
            "type": "Operations"
        }
    ]
}

// Failed
{
    "message": "Mensagem informando o erro!"
}
```

> <h2>GET- Get Users Search Filters </h2>

### Path URL

```
{BASE_URL}/user/page/search?name=&type=&columnOrder=&order=&page=
```

### Query Params

#### `KEY` name

#### `VALUE` a

#### `KEY` type

#### `VALUE` cx

#### `KEY` columnOrder

#### `VALUE` type

#### `KEY` order

#### `VALUE` asc

#### `KEY` page

#### `VALUE` 4

### Response

```json
// Success
{
    "message": "Usuários encontrados!",
    "data": [
        {
            "id": 22,
            "name": "Nathalia",
            "email": "nathaliacx@labenu",
            "type": "CX"
        },
        {
            "id": 3,
            "name": "Paula",
            "email": "paula@labenu",
            "type": "Teacher"
        },
        {
            "id": 16,
            "name": "Rebeca",
            "email": "rebeca@labenu",
            "type": "Operations"
        },
        {
            "id": 20,
            "name": "Tainah",
            "email": "tainah@labenu",
            "type": "Operations"
        },
        {
            "id": 18,
            "name": "Vitória",
            "email": "vitoria@labenu",
            "type": "Operations"
        }
    ]
}

// Failed
{
    "message": "Mensagem informando o erro!"
}
```

> <h2>GET- Get User By Name  </h2>

### Path URL

```
{BASE_URL}/user?name=
```

### Query Params

#### `KEY` name

#### `VALUE` pa

### Response

```json
// Success
{
    "message": "Usuários encontrados!",
    "data": [
        {
            "id": 3,
            "name": "Paula",
            "email": "paula@labenu",
            "type": "Teacher"
        }
    ]
}

// Failed
{
    "message": "Mensagem informando o erro!"
}
```

> <h2>GET- Get User By Type </h2>

### Path URL

```
{BASE_URL}/user/:type
```

### Path Variables

#### `KEY` type

#### `VALUE` op

### Response

```json
// Success
{
    "message": "Usuários encontrados!",
    "data": [
        {
            "id": 11,
            "name": "Luciano",
            "email": "luciano@labenu",
            "type": "Operations"
        },
        {
            "id": 12,
            "name": "Miau",
            "email": "miau@labenu",
            "type": "Operations"
        }
    ]
}

// Failed
{
    "message": "Mensagem informando o erro!"
}
```

<h2>👷‍♂️ Como testar?</h2>
<ul>
<li> Para testar as endpoinst você vai precisar fazer um clone do repositório;</li>
<li> Instalar as dependências:</li>

```bash
$ npm i
```

<li> Agora para testar os endpoints com acesso a um banco de dados, você precisará criar um arquivo .env:</li>

```bash
$ touch .env
```

<li> Dentro do arquivo .env você deve inserir as credenciais de acesso ao bando de dados no seguinte formato:</li>

```jsavascript
DB_HOST = // Aqui será informado o IP do host.
DB_USER = // Aqui será informado o nome do usuário.
DB_PASS = // Aqui será informado a senha de acesso.
DB_NAME = // Aqui será informado o nome do banco de dados.
```

<li> Caso queira testar em um banco de dados particular, segue as queries para criar as tabelas:</li>

```sql
-- Create Table aula48_exercicio
CREATE TABLE aula48_exercicio (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    type VARCHAR(255) NOT NULL
);
```

<li> Inicializar o projeto</li>

```bash
$ npm run dev
```

<li> Assim os testes podem ser feitos pelo Postman!</li>
</ull>
