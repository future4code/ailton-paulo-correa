<h1 align="center"> ⚙️ API - To Do List ⚙️</h1>

<h3>📑 Sobre</h3>
<p align="justify">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Projeto com intuito de desenvolver e praticar o desenvolvimento de uma API Rest com Typescript e MySQL, o sistema tem a finalidade de criar usuários e tarefas, determinar quem fará as tarefas e o situação que se encontra a tarefa.
</p>

<h2>🛠️ Funcinalidades</h2>
<ul>
    <li> Criar um novo usuário;</li>
    <li> Encontrar um usuário pelo seu ID;</li>
    <li> Encontrar um usuário pelo seu apelido;</li>
    <li> Editar nome e apelido de um usuário;</li>
    <li> Buscar todos os usuários;</li>
    <li> Criar uma tarefa;</li>
    <li> Encontrar uma tarefa pelo seu ID;</li>
    <li> Encontrar as tarefas criadas por um determinado usuário;</li>
    <li> Atribuir um usuário para ser responsável por uma tarefa;</li>
    <li> Encontrar o(s) usuário(s) responsável por uma tarefa;</li>
    <li> Encontrar uma tarefa com seus respectivos responsáveis;</li>
    <li> Atualizar a condição da tarefa pelo seu ID;</li>
    <li> Atribuir mais de um responsável por tarefa.</li>
</ul>

<h2>🔨 Funcionalidades não implementadas</h2>
<ul>
    <li> Encontrar as tarefas pela sua condição;</li>
    <li> Encontrar as tarefas atrasadas;</li>
    <li> Remover um usuário como responsável de uma tarefa;</li>
    <li> Encontrar tarefa por termos;</li>
    <li> Atualizar a condição de várias tarefas;</li>
    <li> Deletar tarefa;</li>
    <li> Deletar usuário.</li>
</ul>

<h2>📖 Documentação da API</h2>
<p>Aqui teremos as descrições para uso das endpoints!</p>
<p>
Como a API não possui um link para utilização, os teste serão feitos apenas no local, então a BASE_URL será seu localhost após executar a aplicação.
</p>

<br/>

> <h2>POST - Create User</h2>

### Path URL

```
{BASE_URL}/user
```

### Body

```json
{
  "name": "Nome do usuário",
  "nickname": "Apelido do usuário",
  "email": "usuario@email.com.br"
}
```

### Response

```json
// Success
{
    "message": "Usuário criado com sucesso!",
    "data": {
        "id": "1661701107601",
        "name": "Nome do usuário",
        "nickname": "Apelido do usuário",
        "email": "usuario@email.com.br"
    }
}

// Failed
{
    "message": "Mensagem informando o erro!"
}
```

> <h2>GET- Get User By ID</h2>

### Path URL

```
{BASE_URL}/user/:id
```

### Path Variables

#### `KEY` id

#### `VALUE` 1661701107601

### Response

```json
// Success
{
    "message": "Usuário encontrado!",
    "data": {
        "id": "1661701107601",
        "nickname": "Apelido do usuário"
    }
}

// Failed
{
    "message": "Mensagem informando o erro!"
}
```

> <h2>PUT- Edit User</h2>

### Path URL

```
{BASE_URL}/user/edit/:id
```

### Path Variables

#### `KEY` id

#### `VALUE` 1661701107601

### Body

```json
{
  "name": "Paulo",
  "nickname": "Mankey"
}
```

### Response

```json
// Success
{
    "message": "Usuário editado com sucesso!"
}

// Failed
{
    "message": "Mensagem informando o erro!"
}
```

> <h2>POST- Create Task</h2>

### Path URL

```
{BASE_URL}/task
```

### Body

```json
{
  "title": "Titulo exemplo",
  "description": "Descrição exemplo",
  "limitDate": "11/10/2022",
  "creatorUserId": "1661701107601"
}
```

### Response

```json
// Success
{
    "message": "Tarefa criada com sucesso!"
}

// Failed
{
    "message": "Mensagem informando o erro!"
}
```

> <h2>GET- Get Task By ID</h2>

### Path URL

```
{BASE_URL}/task/:id
```

### Path Variables

#### `KEY` id

#### `VALUE` 1661702352260

### Response

```json
// Success
{
    "message": "Tarefa encontrada!",
    "data": {
        "result": {
            "id": "1661702352260",
            "title": "Titulo exemplo",
            "description": "Descrição exemplo",
            "limitDate": "2022/10/11",
            "creatorUserId": "1661701107601",
            "status": "a fazer",
            "nickname": "Mankey"
        }
    }
}

// Failed
{
    "message": "Mensagem informando o erro!"
}
```

> <h2>GET- Get All Users</h2>

### Path URL

```
{BASE_URL}/user/all
```

### Response

```json
// Success
{
    "message": "Usuários encontrados no banco de dados!",
    "data": [
        {
            "id": "1661701107601",
            "nickname": "Mankey"
        },
        {
            "id": "1661531729120",
            "nickname": "Nickname Teste"
        },
        {
            "id": "1661535985769",
            "nickname": "Paulo"
        }
    ]
}

// Failed
{
    "message": "Mensagem informando o erro!"
}
```

> <h2>GET- Get Tasks By User</h2>

### Path URL

```
{BASE_URL}/task
```

### Query Params

#### `KEY` creatorUserId

#### `VALUE` 1661701107601

### Response

```json
// Success
{
    "message": "Tarefas do Usúario foram encontradas!",
    "data": [
        {
            "id": "1661702352260",
            "title": "Titulo exemplo",
            "description": "Descrição exemplo",
            "limitDate": "11/10/2022",
            "creatorUserId": "1661701107601",
            "status": "a fazer",
            "nickname": "Mankey"
        }
    ]
}

// Failed
{
    "message": "Mensagem informando o erro!"
}
```

> <h2>GET- Get User By Nickname</h2>

### Path URL

```
{BASE_URL}/task
```

### Query Params

#### `KEY` query

#### `VALUE` mANk

### Response

```json
// Success
{
    "message": "Usuários encontrados!",
    "data": [
        {
            "id": "1661701107601",
            "nickname": "Mankey"
        }
    ]
}

// Failed
{
    "message": "Mensagem informando o erro!"
}
```

> <h2>POST- Create Responsible User for Task</h2>

### Path URL

```
{BASE_URL}/task/responsible
```

### Body

```json
{
  "taskId": "1661624450486",
  "userId": "1661535985769"
}
```

### Response

```json
// Success
{
    "message": "Usuário atribuido para uma tarefa!"
}

// Failed
{
    "message": "Mensagem informando o erro!"
}
```

> <h2>GET - Get User Responsible for Task</h2>

### Path URL

```
{BASE_URL}/task/:id/responsible
```

### Path Variables

#### `KEY` id

#### `VALUE` 1661702352260

### Response

```json
// Success
{
    "message": "Usuários responsáveis por essa tarefa encontrados!",
    "data": [
        {
            "responsible_user_id": "1661701107601",
            "nickname": "Mankey"
        },
        {
            "responsible_user_id": "1661535985769",
            "nickname": "Paulo"
        }
    ]
}

// Failed
{
    "message": "Mensagem informando o erro!"
}
```

> <h2>GET - Get Task With All Users Responsibles</h2>

### Path URL

```
{BASE_URL}/task/:id/responsiblesTask
```

### Path Variables

#### `KEY` id

#### `VALUE` 1661702352260

### Response

```json
// Success
{
    "message": "Usuários responsáveis por essa tarefa encontrados!",
    "data": {
        "taskId": "1661702352260",
        "title": "Titulo exemplo",
        "description": "Descrição exemplo",
        "limitDate": "2022/10/11",
        "creatorUserId": "1661701107601",
        "status": "a fazer",
        "creatorUserNickname": "Mankey",
        "responsibleUsers": [
            {
                "id": "1661701107601",
                "nickname": "Mankey"
            },
            {
                "id": "1661535985769",
                "nickname": "Paulo"
            }
        ]
    }
}

// Failed
{
    "message": "Mensagem informando o erro!"
}
```

> <h2>GET - Update Status</h2>

### Path URL

```
{BASE_URL}/task/status/:id
```

### Path Variables

#### `KEY` id

#### `VALUE` 1661702352260

### Body

```json
{
  "status": "feito"
}
```

### Response

```json
// Success
{
    "message": "Tarefa atualizada com sucesso!"
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
    status VARCHAR(255),
    creatorUserId VARCHAR(255) NOT NULL,
    FOREIGN KEY (creatorUserId)
        REFERENCES Users (id)
);

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
```

<li> Inicializar o projeto</li>

```bash
$ npm start
```

<li> Assim os testes podem ser feitos pelo Postman!</li>
</ull>
