module.exports = app => {
  const Pedido = app.models.pedido;
  const neo = app.libs.conn_factory(3);

  const PedidoController = {
    create: (req, res) => {
      Pedido.create(req.body, (err, result) => {
        if(err) return res.status(500).json({ "Error": err });

        req.body.itens.forEach(item => {
          console.log(item);
          neo.run(`create (c:Cliente{id_cliente: ${req.body.cliente}})
                  -[r:COMPROU]->(pro:Produto{id_produto: ${item}})`)
                  .then(res => {
                    console.log(res)
                    neo.close();
                  })
                  .catch(err => {
                    return res.status(500).json({ "Error": err });
                  })
        });

        res.status(200).json(result);
      });
    },

    find: (req, res) => {
      Pedido.find({cliente: req.params.id_cliente}, (err, result) => {
        if(err) return res.status(500).json({ "Error": err });
        res.status(200).json(result);
      });
    }
  }

  return PedidoController;
}
