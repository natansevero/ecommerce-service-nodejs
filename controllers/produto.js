module.exports = app => {
  const Produto = app.models.produto;

  const ProdutoController = {
    create: (req, res) => {
      Produto.create(req.body, (err, result) => {
        if(err) return res.status(500).json({ "Error": err });
        res.status(200).json(result);
      });
    },

    getOne: (req, res) => {
      Produto.getOne(req.params.id, (err, result) => {
        if(err) return res.status(500).json({ "Error": err });
        res.status(200).json(result.rows[0]);
      })
    }
  }

  return ProdutoController;
}
