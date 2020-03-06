# NDSports

## Sobre 

Projeto utilizado para controle de eventos

Este projeto consiste de uma API em `nodejs` e uma aplicação web para consumo da mesma, em `React`.


## Instalação

### Instalar dependências

Utilize este comando para instalar as dependências do projeto

```bash
npm install
```

### Iniciar Servidor
Dentro da raiz do projeto utilize o seguinte comando para iniciar o servidor

```bash
#./ndsports/
cd backend

#./ndsports/backend
node server
```

Ao inicializar o servidor a seguinte mensagem será impressa no CLI
```bash
$ node server
Ouvindo porta: 5000
Conexão mongoose realizada com sucesso!
```


### Executar App
Após a inicializar o servidor voltar a pasta raiz, e utilizar o seguinte comando para inicializar o react app

```bash
#./ndsports/backend
cd..

#./ndsports/
npm start
```

Isto inicializará o web app em `localhost:3000`


## API

Criada para tratar requisições de eventos.

#### `Schema`
```javascript
    {        
        name: String,
        location: String,
        dateToHappen: Date        
    }
```


### `GET`

Retorna lista de eventos

#### Request  
```
http://localhost:5000/events/
```

#### Response
```json
[
    {
        "_id": "5e615ee3520f431ea027d71b",
        "name": "Futiba da EES",
        "location": "Ufscar",
        "dateToHappen": "2019-05-27T02:22:49.052Z",
        "__v": 0
    },
    {
        "_id": "5e6188802a24ec34041fd0b1",
        "name": "Campeonato de comer Hamburguer",
        "location": "Seu Burgao",
        "dateToHappen": "2020-05-12T23:16:37.000Z",
        "__v": 0
    },
    {
        "_id": "5e6194ca2a24ec34041fd0b2",
        "name": "Basketinho do Gutinho",
        "location": "Ipiranga",
        "dateToHappen": "2020-03-06T00:09:09.537Z",
        "__v": 0
    }
]
```


### `GET /:id`

Retorna evento específico do :id 

#### Request 
```
http://localhost:5000/events/:id
```

Considerando :id = 5e615ee3520f431ea027d71b

#### Response
```json
{
    "_id": "5e615ee3520f431ea027d71b",
    "name": "Futiba da EES",
    "location": "Ufscar",
    "dateToHappen": "2019-05-27T02:22:49.052Z",
    "__v": 0
}
```


### `POST`

Adiciona evento na lista

#### Request
```
http://localhost:5000/events/add
```


##### Requestbody
```json
{
	"name": "Basketinho do Gutinho",
    "location": "Ipiranga",
    "dateToHappen": "2020-03-06T00:09:09.537Z"
}
```    

#### Response
```json
"Evento Adicionado."
```

### `PATCH /:id`

Atualiza dados de determinado evento, especificado pelo :id

#### Request
```
http://localhost:5000/events/update/:id
```

Considerando :id = 5e6194ca2a24ec34041fd0b2

##### Requestbody
```json
{    
    "name": "Volêi FACENS",
    "location": "FACENS",
    "dateToHappen": "2019-05-27T02:22:49.052Z"    
}

#### Response
```json
"Evento: n atualizado."
```
*Sendo n o número de documentos atualizados*



### `DELETE`

Remove um evento da lista

#### Request
```
http://localhost:5000/events/:id
```

Considerando :id = 5e6194ca2a24ec34041fd0b2

#### Response
```json
"Deletado com sucesso"
```
