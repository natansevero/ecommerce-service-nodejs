module.exports = app => {
  const conn = app.libs.conn_factory(1);

  const Produto = {
    create : (produto, callback) => {
      conn
      .then(client => {
        client.query(`insert into produto(nome, valor) values ('${produto.nome}', ${produto.valor})`, callback);
      });
    },

    getOne : (id_produto, callback) => {
      conn
      .then(client => {
        client.query(`select * from produto where id_produto = ${id_produto}`, callback);
      });
    }
  }

  return Produto;
}
