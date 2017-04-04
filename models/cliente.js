module.exports = app => {
  const conn = app.libs.conn_factory(1);

  const Cliente = {
    create: (user, callback) => {
      conn
      .then(client => {
        client.query(`insert into cliente(nome) values ('${user.nome}')`, callback);
      });
    },

    getOne: (id, callback) => {
      conn
      .then(client => {
        client.query(`select * from cliente where id_cliente = ${id}`, callback);
      });
    },

    addAddress: (id_cliente, endereco, callback) => {
      conn
      .then(client => {
        client.query(
          `insert into endereco_cliente(id_cliente, endereco) values (${id_cliente}, '${endereco}')`,
          callback
        );
      });
    }
  }

  return Cliente;
}
