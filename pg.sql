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
