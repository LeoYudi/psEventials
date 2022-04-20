# Processo seletivo Eventials

Repositório voltado para o desenvolvimento do desafio contido no processo seletivo da Eventials

### Funcionalidades

API com 3 rotas:

- `POST /companies/import-file` -> recebe um arquivo .csv e adiciona os registros no banco de dados
- `POST /companies/merge-file` -> recebe um arquivo .csv e adiciona os campos nulos nos registros do banco procurando pelo nome e cep da empresa
- `GET /companies` -> query de filtro das empresas, passe pelos parametros `name` e `zip` para filtrar

### Instalação e Execução do código

Primeiro instalar as dependências:

```sh
yarn install
```

Depois basta iniciar a aplicação

```sh
yarn start
```

Como a API foi desenvolvida utilizando o SQLite não é necessário configurar variáveis de ambiente (apenas a porta da aplicação, mas caso não tenha configurado utilizará 3000 como padrão)

### Documentação

A documentação da API está disponível na rota `/docs` e foi desenvolvida com o Insomnia
