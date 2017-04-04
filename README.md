# Serviço de E-Commerce em Node.js

## Descrição
Atividade da disciplina de Banco de Dados II do curso de Análise e Desenvolvimento de Sistema - IFPB - Campus Cajazeiras. A aplicação consiste em um pequeno serviço de E-Commerce com persistência poliglota usando os bancos de dados PostgreSQL, MongoDB e Neo4j.

## Requisitos
* Node.js instalado na máquina
* Para fazer os testes com os endpoints da API, você pode usar o Postman. Link para download: https://www.getpostman.com/

## Bancos de Dados
* PostgreSQL:
Crie um banco chamado "ServiceEcommerceDBNC" e mude a senha da conexão para a sua senha no módulo libs/conn_factory.js. Você deve rodar o seguinte SQL para a criação das tabelas:
```
  create table produto(
    id_produto serial,
    nome varchar(30) not null,
    valor double precision not null,
    primary key(id_produto)
  );

  create table cliente(
    id_cliente serial,
    nome varchar(50) not null,
    primary key (id_cliente)
  );

  create table endereco_cliente(
    id_endereco serial,
    id_cliente int,
    endereco varchar(50),
    primary key(id_endereco, id_cliente),
    foreign key(id_cliente) references cliente(id_cliente)
  );
```

* MongoDB
Apenas tenha instalado corretamente em sua máquina na porta padrão

* Neo4J
Apenas tenha instalado corretamente em sua máquina na porta padrão

## Rodando a aplicação
1: Clone o repositório
```
  git clone https://github.com/natansevero/ecommerce-service-nodejs
```
2: Acesse o projeto
```
  cd ecommerce-service-nodejs
```
3: Instale as depêndencias
```
  npm install
```
4: Rode a aplicação
```
  node app.js
```
OBS.: A aplicação será servida em localhost:3000

## Endpoints
* Cliente:
```
  Cadastrar um novo cliente:

  POST /cliente
    request body:
      {
  	     "nome": "Nome_Cliente"
      }
```
```
  Consultar um cliente especifico pelo ID:

  GET /cliente/:id
```
```
  Inserir um endereço para o cliente:

  POST/ /endereco/:id_cliente
    request body:
      {
        "endereco": "Avenida Senhor Martins"
      }
```
* Produto
```
  Cadastrar um novo produto:

  POST /produto
    request body:
      {
        "nome": "nome_produto",
        "valor": valor_double
      }
```
```
  Consultar um produto específico pelo ID

  GET /pedido/:id  
```
* Pedido
```
  Cadastrar um fechamento de pedido

  POST /pedido
    request body:
      {
      	"itens": [2,3],
      	"cliente": 1,
      	"valor_total": 56.55
      }
```
```
  Consultar os pedidos de um cliente específico pelo ID

  GET /pedido/:id_cliente
```
