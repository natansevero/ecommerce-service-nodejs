module.exports = app => {
  const ClienteController = app.controllers.cliente;

  app.post('/cliente', ClienteController.create);
  app.get('/cliente/:id', ClienteController.getOne);
  app.post('/endereco/:id_cliente', ClienteController.addAddress);
}
