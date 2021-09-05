<br>
<br>
<h1 align="center" >Multilind Servidor de Conteúdos</h1>
<br>
<p align="center"><img width="200"src="src/assets/img/multilind.jpg"> </p>
<p align="center"> Servidor para administrar a criação de conteúdos para o aplicativo <strong>Multilind</strong>.</p>
<br>

# Índice

- [Rode o Backend com Docker](#rode-o-backend-com-docker)
  - [Dependências](#dependências)
  - [Arquivos de Configuração](#arquivos-de-configuração)
  - [Inicialização do Projeto](#inicialização-do-projeto)

## Rode o Backend com Docker

### Dependências

Inicialmente, instale localmente as seguintes dependências:

1. Instale o [Docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/);
2. Instale o [Docker Compose](https://docs.docker.com/compose/install/).

### Arquivos de Configuração

Crie um arquivo `.env` na raiz do projeto e preencha as seguintes variáveis de ambiente:

```env
DB_DIALECT=
DB_HOST=
DB_PORT=
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=
```

exemplo:

```env
DB_DIALECT=postgres
DB_HOST=localhost
DB_PORT=5432
POSTGRES_USER=user
POSTGRES_PASSWORD=password
POSTGRES_DB=test
```

### Inicialização do Projeto

1. Na pasta principal do projeto, construa e inicialize a aplicação com o comando:

```bash
make build
```

ou 

```bash
sudo docker-compose up --build
```

2. O backend estará disponível em: `http://localhost:8000/api/content`.


