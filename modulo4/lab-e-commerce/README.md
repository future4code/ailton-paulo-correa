<h1 align="center"> 📑Projeto Lab E-Commerce</h1>
<h3 align="center">Projeto focado para praticar e desenvolver uma API de um E-Commerce.</h3>

<h2>🛠️ Funcionalidades</h2>
<ul>
    <li> Criar usuários;</li>
    <li> Pegar usuários;/li>
    <li> Criar produtos;</li>
    <li> Pegar produtos;</li>
    <li> Criar compra de um produto;</li>
    <li> Pegar compras de um usuário.</li>
</ul>

<h2>📖 Documentação da API</h2>
<p>Aqui teremos as descrições para uso das endpoints!</p>

```bash
URL Base: https://lab-e-commerce-paulo.herokuapp.com/
```

<br/>

> <h2> POST - Create User</h2>

### Path URL

```
https://lab-e-commerce-paulo.herokuapp.com/users
```

### Body

```json
{
  "name": "Paulo Henrique",
  "email": "paulo@henrique.com.br",
  "password": "senha"
}
```

### Response

```json
// Success
{
    "message": "Usuário Paulo Henrique criado com sucesso!"
}

// Failed
{
    "message": "Mensagem informando o erro!"
}
```

> <h2> GET - Get All Users</h2>

### Path URL

```
https://lab-e-commerce-paulo.herokuapp.com/users
```

### Response

```json
// Success
{
    "message": "Listagem de todos os usuários!",
    "data": {
        "users": [
            {
                "id": "1662059740943",
                "name": "Gabriela",
                "email": "gabriela@email.com.br",
                "purchases": [
                    {
                        "id": "1662136063490",
                        "quantity": 400,
                        "total_price": 48900,
                        "user_id": "1662059740943",
                        "product_id": "1662070817990"
                    }
                ]
            },
            {
                "id": "1662140648376",
                "name": "Paulo Henrique",
                "email": "paulo@henrique.com.br",
                "purchases": []
            }
        ]
    }
}

// Failed
{
    "message": "Mensagem informando o erro!"
}
```

> <h2> POST - Create Product</h2>

### Path URL

```
https://lab-e-commerce-paulo.herokuapp.com/products
```

### Body

O `image_url` deve ser um link real com algum formato sendo referenciado(.png/.jpg/...)

```json
{
  "name": "Produto A",
  "price": 122.25,
  "image_url": "www.dsadsa.com/dsadas.png"
}
```

### Response

```json
// Success
{
    "message": "Produto Produto A criado com sucesso!"
}

// Failed
{
    "message": "Mensagem informando o erro!"
}
```

> <h2> GET - Get All Products</h2>

### Path URL

```
https://lab-e-commerce-paulo.herokuapp.com/products
```

### Query Params

#### `KEY` order

#### `VALUE` desc

#### `KEY` search

#### `VALUE` a

### Response

```json
// Success
{
    "message": "Lista de Produtos",
    "data": {
        "products": [
            {
                "id": "1662142959963",
                "name": "Produto A",
                "price": 122.25,
                "image_url": "www.dsadsa.com/dsadas.png"
            },
            {
                "id": "1662140242869",
                "name": "A",
                "price": 122.25,
                "image_url": "www.dsadsa.com/dsadas.png"
            },
            {
                "id": "1662141900448",
                "name": "A",
                "price": 122.25,
                "image_url": "www.dsadsa.com/dsadas.png"
            }
        ]
    }
}

// Failed
{
    "message": "Mensagem informando o erro!"
}
```

> <h2> POST - Create Purchase</h2>

### Path URL

```
https://lab-e-commerce-paulo.herokuapp.com/purchases
```

### Body

O `image_url` deve ser um link real com algum formato sendo referenciado(.png/.jpg/...)

```json
{
  "user_id": "1662059740943",
  "product_id": "1662070817990",
  "quantity": 400
}
```

### Response

```json
// Success
{
    "message": "Compra do produto realizada com sucesso!",
    "data": {
        "user_id": "1662059740943",
        "product_id": "1662070817990",
        "quantity": 20,
        "id": "1662143242604",
        "total_price": 2445
    }
}

// Failed
{
    "message": "Mensagem informando o erro!"
}
```

> <h2> GET - Get Purchases By User</h2>

### Path URL

```
https://lab-e-commerce-paulo.herokuapp.com/users/:user_id/purchases
```

### Path Params

#### `KEY` user_id

#### `VALUE` 1662059740943

### Response

```json
// Success
{
    "message": "Lista de compras do usuário informado!",
    "data": {
        "purchases": [
            {
                "id": "1662136063490",
                "quantity": 400,
                "total_price": 48900,
                "user_id": "1662059740943",
                "product_id": "1662070817990"
            },
            {
                "id": "1662143242604",
                "quantity": 20,
                "total_price": 2445,
                "user_id": "1662059740943",
                "product_id": "1662070817990"
            }
        ]
    }
}

// Failed
{
    "message": "Mensagem informando o erro!"
}
```
