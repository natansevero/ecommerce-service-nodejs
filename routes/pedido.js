module.exports = app => {
  const PedidoController = app.controllers.pedido;

  app.post('/pedido', PedidoController.create);
  app.get('/pedido/:id_cliente', PedidoController.find);
}
