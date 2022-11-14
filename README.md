<h1 align="center">
  Bet-End - API
</h1>

<h3 align="center">API para criação do seu bolão
<a href="https://github.com/Projeto-Back-End-Node-JS/Bet-end" target="_blank">(GitHub)</a>
</h3>

<div align="center">

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=API%20Bet-end&uri=https%3A%2F%2Fraw.githubusercontent.com%2FProjeto-Back-End-Node-JS%2FBet-end%2Fdevelop%2FBetEnd-Documentation.json%3Ftoken%3DGHSAT0AAAAAABZ6WS4JO2CQMSRLAGXJLVQIY3MINDA)

</div>

## TECNOLOGIAS

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [TypeORM](https://typeorm.io/)
- [JWT](https://jwt.io/)
- [Bcrypt](https://pypi.org/project/bcrypt/)
- [Jest](https://jestjs.io/pt-BR/)
- [Postgres](https://www.postgresql.org/)

## CREATE USER

### Todas as chaves são obrigatórias

- name: deve ser do tipo string
- email: deve ser do tipo string
- password: deve ser do tipo string
- isAdm: deve ser do tipo boolean

### Esta rota não necessita de autenticação

### Retornos esperados

""STATUS 201 CREATED""

```json
{
  "name": "Felipe",
  "email": "felipe@kenzie.com",
  "isAdm": true,
  "isActive": true,
  "id": "c4a8f8d9-da26-4951-bb1b-099375e33c27",
  "createdAt": "2022-08-17T20:13:34.685Z",
  "updatedAt": "2022-08-17T20:13:34.685Z"
}
```

""STATUS 400 CONFLICT""

```json
{
  "status": "error",
  "code": 409,
  "message": "User Already Exists"
}
```

## LIST USER

### Nenhum dado é necessário no corpo da requisição

### Esta rota necessita de autenticação e de verificação de administrador

### Retornos esperados

""STATUS 200 OK""

```json
[
  {
    "id": "7bb2a285-0735-4b03-a9b1-27e595e26f86",
    "name": "Felipe",
    "email": "felipe@kenzie.com",
    "isAdm": true,
    "isActive": true,
    "createdAt": "2022-08-22T20:18:01.401Z",
    "updatedAt": "2022-08-22T20:18:01.401Z"
  },
  {
    "id": "8e1f7187-0e46-4711-9f8d-bcb835b1ff37",
    "name": "Joana",
    "email": "joana@kenzie.com",
    "isAdm": false,
    "isActive": false,
    "createdAt": "2022-08-22T20:17:59.709Z",
    "updatedAt": "2022-08-22T20:18:29.784Z"
  },
  {
    "id": "5160f2fe-864a-4c34-920f-d7fb807541a7",
    "name": "fabio",
    "email": "fabio@kenzie.com",
    "isAdm": false,
    "isActive": false,
    "createdAt": "2022-08-22T20:45:14.559Z",
    "updatedAt": "2022-08-22T20:51:54.133Z"
  }
]
```

""STATUS 401 UNAUTHORIZED""

```json
{
  "message": "Invalid token"
}
```

""STATUS 403 FORBIDDEN""

```json
{
  "message": "User not has authorization "
}
```

## UPDATE USER

### Todas as chaves são opcionais

- name: deve ser do tipo string
- email: deve ser do tipo string
- password: deve ser do tipo string

### Esta rota necessita de autenticação e de verificação de administrador ou de dono do perfil

### Retornos esperados

""STATUS 200 OK""

```json
{
  "id": "22e15606-8d2c-43e2-b4d3-b7d53d5d0c28",
  "name": "cauan",
  "email": "fabio@kenzie.com",
  "isAdm": true,
  "createdAt": "2022-11-08T15:50:27.514Z",
  "updatedAt": "2022-11-08T15:56:32.929Z"
}
```

""STATUS 401 UNAUTHORIZED""

```json
{
  "message": "Invalid token"
}
```

""STATUS 403 FORBIDDEN""

```json
{
  "message": "User not has authorization "
}
```

## DELETE USER

### Nenhum dado é necessário no corpo da requisição

### Esta rota necessita de autenticação e de verificação de administrador ou de dono do perfil

### Retornos esperados

""STATUS 204 NO CONTENT""

```json
No body returned for response
```

""STATUS 401 UNAUTHORIZED""

```json
{
  "message": "Invalid token"
}
```

""STATUS 403 FORBIDDEN""

```json
{
  "message": "User not has authorization "
}
```

""STATUS 404 NOT FOUND""

```json
{
  "status": "error",
  "code": 404,
  "message": "User not found"
}
```

## LOGIN

### Todas as chaves são obrigatórias

- email: deve ser do tipo string
- password: deve ser do tipo string

### Esta rota não necessita de autenticação

### Retornos esperados

""STATUS 200 OK""

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZlbGlwZUBrZW56aWUuY29tIiwiaXNBZG0iOnRydWUsImlhdCI6MTY2NzkxODAyNywiZXhwIjoxNjY3OTI1MjI3LCJzdWIiOiIwNjRkMzg4Yi00ODBiLTRlZWYtOWExNi05MTEyYjk4Y2ExZTkifQ.tz3FtBpuz7mrFCktHJkYD42uMBIrNrLMCC-A1aN9Bvw"
}
```

""STATUS 403 FORBIDDEN""

```json
{
  "status": "error",
  "code": 400,
  "message": "Wrong email or password"
}
```

## CREATE MATCH

### Todas as chaves são obrigatórias

- day: deve ser do tipo string
- hour: deve ser do tipo string
- team1: deve ser do tipo string
- team2: deve ser do tipo string

### Esta rota necessita de autenticação e de verificação de administrador

### Retornos esperados

""STATUS 201 CREATED""

```json
{
  "day": "2022/11/25",
  "hour": "12:30",
  "team1": "Brasil",
  "team2": "Alemanha",
  "result": null,
  "id": "26427c46-9c2a-4ef1-86d1-22e225eef91c",
  "score": 0,
  "createdAt": "2022-11-07T17:02:28.670Z"
}
```

""STATUS 401 UNAUTHORIZED""

```json
{
  "message": "Invalid token"
}
```

""STATUS 403 FORBIDDEN""

```json
{
  "message": "User not has authorization "
}
```

''STATUS 409 CONFLICT""

```json
{
  "status": "error",
  "code": 409,
  "message": "Match already exists"
}
```

## LIST MACTHES

### Nenhum dado é necessário no corpo da requisição

### Esta rota não necessita de autenticação

### Retornos esperados

""STATUS 200 OK""

```json
[
  {
    "id": "f21ad5dc-1bd1-4b40-9d39-eddbf72c9cd9",
    "day": "2022-11-25",
    "hour": "12:30:00",
    "result": null,
    "score": 0,
    "team1": "Brasil",
    "team2": "Alemanha",
    "createdAt": "2022-11-09T12:37:39.019Z"
  },
  {
    "id": "b8b15abd-487f-4fe3-826f-2ee1fe70e8af",
    "day": "2022-11-25",
    "hour": "12:30:00",
    "result": null,
    "score": 0,
    "team1": "Inglaterra",
    "team2": "Sérvia",
    "createdAt": "2022-11-09T12:37:43.180Z"
  },
  {
    "id": "357d2e05-bf31-443e-87b2-47d24a35dff6",
    "day": "2022-11-20",
    "hour": "11:30:00",
    "result": null,
    "score": 0,
    "team1": "Colombia",
    "team2": "Inglaterra",
    "createdAt": "2022-11-09T12:37:48.664Z"
  }
]
```

## UPDATE MATCH

### Todas as chaves são opcionais

- name: deve ser do tipo string
- email: deve ser do tipo string
- password: deve ser do tipo string

### Esta rota necessita de autenticação e de verificação de administrador

### Retornos esperados

""STATUS 200 OK""

```json
{
  "id": "aa86c813-4be1-44f9-8670-ccea2b15fec2",
  "day": "2022-11-20",
  "hour": "11:30:00",
  "result": "Inglaterra",
  "score": 3,
  "team1": "Colombia",
  "team2": "Inglaterra",
  "createdAt": "2022-11-08T14:23:54.173Z"
}
```

""STATUS 401 UNAUTHORIZED""

```json
{
  "message": "Invalid token"
}
```

""STATUS 404 NOT FOUND""

```json
{
  "message": "Match not found."
}
```

## DELETE MATCH

### Nenhum dado é necessário no corpo da requisição

### Esta rota necessita de autenticação e de verificação de administrador

### Retornos esperados

""STATUS 204 NO CONTENT""

```json
No body returned for response
```

""STATUS 401 UNAUTHORIZED""

```json
{
  "message": "Invalid token"
}
```

""STATUS 404 NOT FOUND""

```json
{
  "status": "error",
  "code": 404,
  "message": "Match not found"
}
```

## CREATE POOL

### Todas as chaves são obrigatórias

- name: deve ser do tipo string
- ownerId: deve ser do tipo string

### Esta rota necessita de autenticação

### Retornos esperados

""STATUS 201 CREATED""

```json
{
  "name": "bolão do Felipe 1",
  "owner": {
    "id": "94cd520d-0e1c-46a4-aead-21f565b676cd",
    "name": "Felipe",
    "email": "felipe@kenzie.com",
    "password": "$2b$10$QrH02kPz6rHvDi7XFNwOB.D.vh6whvPnoHsR8586ZzFQJHcZbYii6",
    "isAdm": true,
    "createdAt": "2022-11-06T17:39:35.269Z",
    "updatedAt": "2022-11-06T17:39:35.269Z"
  },
  "id": "2a277a21-4fea-4568-aeb7-c5b3cfe31f21",
  "createdAt": "2022-11-06T18:48:33.417Z",
  "updatedAt": "2022-11-06T18:48:33.417Z"
}
```

""STATUS 401 UNAUTHORIZED""

```json
{
  "message": "Invalid token"
}
```

## LIST POOLS

### Nenhum dado é necessário no corpo da requisição

### Esta rota não necessita de autenticação

### Retornos esperados

""STATUS 200 OK""

```json
[
  {
    "id": "42bb7a7f-13fc-441d-ba4f-7e1a0d463562",
    "name": "bolão do Felipe 1",
    "createdAt": "2022-11-08T16:37:36.026Z",
    "updatedAt": "2022-11-08T16:37:36.026Z",
    "owner": {
      "id": "720e1e07-08f8-4ccc-9d66-c900308b219f",
      "name": "Felipe",
      "email": "felipe@kenzie.com",
      "password": "$2b$10$2LbEhZpebGp631/DUZmK7u56240DfuvzHfzdEH0CeMOaV7SSKtPWy",
      "isAdm": true,
      "createdAt": "2022-11-08T15:49:59.749Z",
      "updatedAt": "2022-11-08T15:49:59.749Z"
    }
  },
  {
    "id": "93670645-b92c-47b5-945a-d42be3dc9855",
    "name": "bolão da Joana 1",
    "createdAt": "2022-11-08T16:37:39.062Z",
    "updatedAt": "2022-11-08T16:37:39.062Z",
    "owner": {
      "id": "387fd457-9683-4213-a3ca-3a3ced949f28",
      "name": "Joana",
      "email": "joana@kenzie.com",
      "password": "$2b$10$JoWlCqPGMvrYUE0A./NIIe6i2yHSRdNnkOX7JwVdskEUX7X5vWV0K",
      "isAdm": false,
      "createdAt": "2022-11-08T15:50:06.493Z",
      "updatedAt": "2022-11-08T15:50:06.493Z"
    }
  }
]
```

## UPDATE POOL

### A chave é obrigatória

- name: deve ser do tipo string

### Esta rota necessita de autenticação e de verificação de dono do bolão

### Retornos esperados

""STATUS 200 OK""

```json
{
  "id": "7a14716f-24ff-42a2-a504-ca58e44dcde9",
  "name": "bolão da Joana 2",
  "createdAt": "2022-11-09T18:52:35.730Z",
  "updatedAt": "2022-11-09T18:54:00.032Z",
  "owner": {
    "id": "95dbd934-7f45-42b6-8f11-1e9cc5b9757a",
    "name": "Joana",
    "email": "joana@kenzie.com",
    "isAdm": false,
    "createdAt": "2022-11-09T18:49:50.301Z",
    "updatedAt": "2022-11-09T18:49:50.301Z"
  }
}
```

""STATUS 401 UNAUTHORIZED""

```json
{
  "message": "Invalid token"
}
```

""STATUS 401 UNAUTHORIZED""

```json
{
  "status": "error",
  "statusCode": 401,
  "message": "You not owner"
}
```

""STATUS 400 BAD REQUEST""

```json
{
  "message": "Pool not found."
}
```

""STATUS 401 UNAUTHORIZED""

```json
{
  "message": "You not owner."
}
```

## DELETE POOL

### Nenhum dado é necessário no corpo da requisição

### Esta rota necessita de autenticação e de verificação de administrador ou de dono do bolão

### Retornos esperados

""STATUS 204 NO CONTENT""

```json
No body returned for response
```

""STATUS 401 UNAUTHORIZED""

```json
{
  "message": "Invalid token"
}
```

""STATUS 401 UNAUTHORIZED""

```json
{
  "status": "error",
  "statusCode": 401,
  "message": "You not owner"
}
```

""STATUS 400 BAD REQUEST""

```json
{
  "status": "error",
  "statusCode": 400,
  "message": "Pool not found"
}
```

## ADD MATCH TO POOL

### Todas as chaves são obrigatórias

- matchesId: deve ser do tipo string
- poolId: deve ser do tipo string

### Esta rota necessita de autenticação e de verificação de administrador ou de dono do pool

### Retornos esperados

""STATUS 201 CREATED""

```json
{
  "message": "Match added with success"
}
```

""STATUS 401 UNAUTHORIZED""

```json
{
  "message": "Invalid token"
}
```

""STATUS 404 NOT FOUND""

```json
{
  "status": "error",
  "code": 404,
  "message": "You are not the owner of the pool"
}
```

""STATUS 404 NOT FOUND""

```json
{
  "message": "Pool if not exist."
}
```

""STATUS 404 NOT FOUND""

```json
{
  "message": "Match not exist."
}
```

""STATUS 404 NOT FOUND""

```json
{
  "message": "Match has already been added."
}
```

## LIST MATCHES FROM POOL

### Nenhum dado é necessário no corpo da requisição

### Esta rota não necessita de autenticação

### Retornos esperados

""STATUS 200 OK""

```json
[
  {
    "id": "7f730b32-2e41-4824-8b96-101648c666f8",
    "matches": {
      "id": "5cb1e722-1716-4131-a134-ebc1ef0633b4",
      "day": "2022-11-25",
      "hour": "12:30:00",
      "result": null,
      "score": 0,
      "team1": "Brasil",
      "team2": "Alemanha",
      "createdAt": "2022-11-08T18:03:41.365Z"
    }
  },
  {
    "id": "9a7a1a56-df47-4629-a885-28af33467e69",
    "matches": {
      "id": "10dcaa14-65be-43d7-b51e-f4e295918e63",
      "day": "2022-11-25",
      "hour": "12:30:00",
      "result": null,
      "score": 0,
      "team1": "Inglaterra",
      "team2": "Sérvia",
      "createdAt": "2022-11-08T18:03:48.930Z"
    }
  }
]
```

""STATUS 404 NOT FOUND""

```json
{
  "message": "Pool not exist."
}
```

## DELETE MATCH FROM POOL

### Nenhum dado é necessário no corpo da requisição

### Esta rota necessita de autenticação e de verificação de dono do bolão

### Retornos esperados

""STATUS 204 NO CONTENT""

```json
No body returned for response
```

""STATUS 401 UNAUTHORIZED""

```json
{
  "message": "Invalid token"
}
```

""STATUS 404 NOT FOUND""

```json
{
  "status": "error",
  "code": 404,
  "message": "You are not the owner of the pool"
}
```

""STATUS 404 NOT FOUND""

```json
{
  "status": "error",
  "code": 404,
  "message": "Match not found"
}
```

## ADD USER TO POOL

### Todas as chaves são obrigatórias

- userId: deve ser do tipo string
- poolId: deve ser do tipo string

### Esta rota necessita de autenticação e de verificação de administrador ou de dono do pool

### Retornos esperados

""STATUS 201 CREATED""

```json
{
  "user": {
    "id": "a04e152d-4244-4c23-b831-d4a56e7099fb",
    "name": "Joana",
    "email": "joana@kenzie.com",
    "isAdm": false,
    "createdAt": "2022-11-09T12:34:53.964Z",
    "updatedAt": "2022-11-09T12:34:53.964Z"
  },
  "pool": {
    "id": "76f9e29e-ab1f-4dac-b180-81d61f872114",
    "name": "bolão do Felipe 1",
    "createdAt": "2022-11-09T12:36:40.706Z",
    "updatedAt": "2022-11-09T12:36:40.706Z",
    "owner": {
      "id": "78e9035e-4ef0-4797-a889-fba908cfb35a",
      "name": "Felipe",
      "email": "felipe@kenzie.com",
      "isAdm": true,
      "createdAt": "2022-11-09T12:34:50.717Z",
      "updatedAt": "2022-11-09T12:34:50.717Z"
    }
  },
  "id": "66115691-5000-42dd-91ee-f56e6bff6239"
}
```

""STATUS 401 UNAUTHORIZED""

```json
{
  "message": "Invalid token"
}
```

""STATUS 404 NOT FOUND""

```json
{
  "status": "error",
  "code": 404,
  "message": "You are not the owner of the pool"
}
```

""STATUS 404 NOT FOUND""

```json
{
  "message": "Pool not exist."
}
```

""STATUS 404 NOT FOUND""

```json
{
  "message": "User not exist."
}
```

""STATUS 404 NOT FOUND""

```json
{
  "message": "User has already been added."
}
```

## LIST USERS FROM POOL

### Nenhum dado é necessário no corpo da requisição

### Esta rota não necessita de autenticação

### Retornos esperados

""STATUS 200 OK""

```json
[
  {
    "id": "66115691-5000-42dd-91ee-f56e6bff6239",
    "user": {
      "id": "a04e152d-4244-4c23-b831-d4a56e7099fb",
      "name": "Joana",
      "email": "joana@kenzie.com",
      "isAdm": false,
      "createdAt": "2022-11-09T12:34:53.964Z",
      "updatedAt": "2022-11-09T12:34:53.964Z"
    }
  },
  {
    "id": "66a2ff2c-fd81-4b7b-b90d-0ed3794ba913",
    "user": {
      "id": "8688b1b3-16c0-4903-aa52-4c03b8f18a29",
      "name": "fabio",
      "email": "fabio@kenzie.com",
      "isAdm": true,
      "createdAt": "2022-11-09T12:34:58.488Z",
      "updatedAt": "2022-11-09T12:34:58.488Z"
    }
  }
]
```

""STATUS 404 NOT FOUND""

```json
{
  "message": "Pool not exist."
}
```

## DELETE USER FROM POOL

### Nenhum dado é necessário no corpo da requisição

### Esta rota necessita de autenticação e de verificação de dono do bolão

### Retornos esperados

""STATUS 204 NO CONTENT""

```json
No body returned for response
```

""STATUS 401 UNAUTHORIZED""

```json
{
  "message": "Invalid token"
}
```

""STATUS 404 NOT FOUND""

```json
{
  "status": "error",
  "code": 404,
  "message": "You are not the owner of the pool"
}
```

""STATUS 404 NOT FOUND""

```json
{
  "status": "error",
  "code": 404,
  "message": "User not found"
}
```

## CREATE BET

### Todas as chaves são obrigatórias

- result: deve ser do tipo string
- score: deve ser do tipo string
- matchId: deve ser do tipo string
- poolId: deve ser do tipo string

### Esta rota necessita de autenticação

### Retornos esperados

""STATUS 201 CREATED""

```json
{
  "result": "Brasil",
  "score": 2,
  "matches": {
    "id": "f21ad5dc-1bd1-4b40-9d39-eddbf72c9cd9",
    "day": "2022-11-25",
    "hour": "12:30:00",
    "result": null,
    "score": 0,
    "team1": "Brasil",
    "team2": "Alemanha",
    "createdAt": "2022-11-09T12:37:39.019Z"
  },
  "user": {
    "id": "78e9035e-4ef0-4797-a889-fba908cfb35a",
    "name": "Felipe",
    "email": "felipe@kenzie.com",
    "isAdm": true,
    "createdAt": "2022-11-09T12:34:50.717Z",
    "updatedAt": "2022-11-09T12:34:50.717Z"
  },
  "pool": {
    "id": "76f9e29e-ab1f-4dac-b180-81d61f872114",
    "name": "bolão do Felipe 1",
    "createdAt": "2022-11-09T12:36:40.706Z",
    "updatedAt": "2022-11-09T12:36:40.706Z",
    "owner": {
      "id": "78e9035e-4ef0-4797-a889-fba908cfb35a",
      "name": "Felipe",
      "email": "felipe@kenzie.com",
      "isAdm": true,
      "createdAt": "2022-11-09T12:34:50.717Z",
      "updatedAt": "2022-11-09T12:34:50.717Z"
    }
  },
  "id": "dc5a8247-1c31-4e42-b353-a2daf1239151",
  "points": 0,
  "createdAt": "2022-11-09T14:04:41.961Z",
  "updatedAt": "2022-11-09T14:04:41.961Z"
}
```

""STATUS 404 NOT FOUND""

```json
{
  "status": "error",
  "code": 404,
  "message": "Match not exist"
}
```

""STATUS 404 NOT FOUND""

```json
{
  "status": "error",
  "code": 404,
  "message": "Pool not exist"
}
```

## LIST BETS FROM USER

### Nenhum dado é necessário no corpo da requisição

### Esta rota não necessita de autenticação

### Retornos esperados

""STATUS 200 OK""

```json
[
  {
    "id": "91746544-86db-4873-8811-87e6b241ef30",
    "result": "Alemanha",
    "score": 3,
    "points": 0,
    "createdAt": "2022-11-09T20:19:14.266Z",
    "updatedAt": "2022-11-09T20:26:07.251Z"
  }
]
```

""STATUS 404 NOT FOUND""

```json
{
  "status": "error",
  "code": 404,
  "message": "User not exist"
}
```

## UPDATE BET

### A chave é obrigatória

- result: deve ser do tipo string
- score: deve ser do tipo number

### Esta rota necessita de autenticação e de verificação de dono do bolão

### Retornos esperados

""STATUS 200 OK""

```json
{
  "id": "91746544-86db-4873-8811-87e6b241ef30",
  "result": "Alemanha",
  "score": 3,
  "points": 0,
  "createdAt": "2022-11-09T20:19:14.266Z",
  "updatedAt": "2022-11-09T20:26:07.251Z"
}
```

""STATUS 401 UNAUTHORIZED""

```json
{
  "message": "Invalid token"
}
```

""STATUS 404 NOT FOUND""

```json
{
  "status": "error",
  "statusCode": 403,
  "message": "You are not the owner of the bet"
}
```

""STATUS 404 NOT FOUND""

```json
{
  "status": "error",
  "code": 404,
  "message": "User not exist"
}
```

""STATUS 404 NOT FOUND""

```json
{
  "status": "error",
  "code": 404,
  "message": "Bet not found!"
}
```

## DELETE BET

### Nenhum dado é necessário no corpo da requisição

### Esta rota necessita de autenticação e de verificação de dono do bolão

### Retornos esperados

""STATUS 204 NO CONTENT""

```json
No body returned for response
```

""STATUS 401 UNAUTHORIZED""

```json
{
  "message": "Invalid token"
}
```

""STATUS 404 NOT FOUND""

```json
{
  "status": "error",
  "code": 404,
  "message": "You are not the owner of the bet"
}
```

""STATUS 404 NOT FOUND""

```json
{
  "status": "error",
  "code": 404,
  "message": "Bet not found"
}
```

## UPDATE POINTS FROM BET

### A chave é obrigatória

- result: deve ser do tipo string
- score: deve ser do tipo number

### Esta rota necessita de autenticação e de verificação de administrador

### Retornos esperados

""STATUS 200 OK""

```json
{
  "id": "dc5a8247-1c31-4e42-b353-a2daf1239151",
  "result": "Brasil",
  "score": 2,
  "points": 5,
  "createdAt": "2022-11-09T14:04:41.961Z",
  "updatedAt": "2022-11-09T14:07:34.704Z"
}
```

""STATUS 401 UNAUTHORIZED""

```json
{
  "message": "Invalid token"
}
```

""STATUS 403 FORBIDDEN""

```json
{
  "status": "error",
  "code": 403,
  "message": "User not has authorization"
}
```
