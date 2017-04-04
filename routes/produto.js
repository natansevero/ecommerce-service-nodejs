module.exports = app => {
  const ProdutoController = app.controllers.produto;

  app.post('/produto', ProdutoController.create);
  app.get('/produto/:id', ProdutoController.getOne);
}
