module.exports = app => {
  const Cliente = app.models.cliente;
  const neo = app.libs.conn_factory(3);

  const ClienteController = {
    create: (req, res) => {
      Cliente.create(req.body, (err, result) => {
        if(err) return res.status(500).json({ "Error": err });

        res.status(200).json(result);
      });
    },

    getOne: (req, res) => {
      Cliente.getOne(req.params.id, (err, result) => {
        if(err) return res.status(500).json({ "Error": err });
        res.status(200).json(result.rows[0]);
      });
    },

    addAddress: (req, res) => {
      Cliente.addAddress(req.params.id_cliente, req.body.endereco, (err, result) => {
        if(err) return res.status(500).json({ "Error": err });
        res.status(200).json(result);
      });
    }
  }

  return ClienteController;
}
