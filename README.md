# App Diagnóstico Social

Uma iniciativa [Missão Peixes](https://www.missaopeixes.com/) 🐟 para automatização de diagnósticos sociais em comunidades de vulnerabilidade social.

## Objetivo

 O objetivo desse projeto é auxiliar ONGs, projetos sociais e agências missionárias a coletar dados e gerar relatórios para realizar diagnósticos sociais das comunidades de atuação.

### Contribuição

Sinta-se a vontade para contribuir com esse projeto.
Ele é feito pela **comunidade** e para a **comunidade**! 😆

---

# diagnosticosocial-server

Back-end da aplicação Diagnóstico Social.

Front-end para a web - [diagnosticosocial-webapp](https://github.com/missaopeixes/diagnosticosocial-webapp)

### Requisitos

- Mysql 8+
- Nodejs 10+

### Preparando o ambiente local

- 1 - Crie um novo banco no seu servidor local Mysql
- 2 - Crie o arquivo de configuração JSON `src/database/config/db-connection.json` com a insformações da conexão. Exemplo:

```json
{
  "development": {
    "username": "root",
    "password": "password",
    "database": "database",
    "host": "localhost",
    "port": "3306",
    "dialect": "mysql"
  }
}
```

- 3 - Construa a estrutura do banco de dados.
```
npm run db:migrate
```

- 4 - Popule o banco com os dados iniciais.
```
npm run db:seed:all
```

- 5 - Instale as dependencias do projeto.
```
npm install
```

### Executando localmente

```
npm run build && npm run start
```

### Executando em desenvolvimento

```
npm run watch
```
```
npm run start
```

Obs: em prompts separados
