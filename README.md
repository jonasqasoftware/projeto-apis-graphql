Claro! Abaixo está um README completo para o projeto:

---

# Projeto de Lista de Tarefas com GraphQL e APIs Rest

Este projeto é uma aplicação simples de lista de tarefas (To-Do List) que utiliza GraphQL para a manipulação de dados no backend e oferece APIs Rest para interação com o frontend. O objetivo é demonstrar o uso prático de GraphQL em um contexto real de desenvolvimento.

## Funcionalidades

- Adicionar novas tarefas.
- Marcar tarefas como concluídas.
- Remover tarefas da lista.
- Consultar todas as tarefas disponíveis.

## Tecnologias Utilizadas

- Node.js
- Express
- GraphQL
- HTML
- CSS
- JavaScript

## Estrutura do Projeto

```
projeto-apis-graphql
│   README.md
│
└───backend
│   │   server.js
│   │   package.json
│   │
│   └───src
│       │   index.js
│       │   schema.graphql
│       │   ...
│   
└───frontend
    │   index.html
    │   styles.css
    │   app.js
    │
    └───src
        │   MainComponent.js
        │   ...
```

## Instalação e Execução

### Backend

1. Navegue até o diretório `backend`:
    ```bash
    cd backend
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Execute o servidor:
    ```bash
    npm start
    ```

### Frontend

1. Navegue até o diretório `frontend`:
    ```bash
    cd frontend
    ```

2. Abra o arquivo `index.html` em um navegador da web.

## Possíveis Consultas GraphQL

- Consultar todas as tarefas:
    ```graphql
    {
      tasks {
        id
        title
        completed
      }
    }
    ```

- Adicionar uma nova tarefa:
    ```graphql
    mutation {
      addTask(title: "Nova Tarefa", completed: false) {
        id
        title
        completed
      }
    }
    ```

- Marcar uma tarefa como concluída:
    ```graphql
    mutation {
      updateTask(id: "1", completed: true) {
        id
        title
        completed
      }
    }
    ```

- Remover uma tarefa:
    ```graphql
    mutation {
      deleteTask(id: "1") {
        id
        title
        completed
      }
    }
    ```

## Boas Práticas de Git

- Faça commits frequentes e descritivos.
- Use ramificações (branches) para desenvolver novas funcionalidades.
- Siga o padrão de nomenclatura de commits do Conventional Commits.
- Mantenha o repositório limpo e organizado.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e enviar pull requests com melhorias e novas funcionalidades.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
