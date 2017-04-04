const mongoose = require('mongoose');

module.exports = app => {
  const conn = app.libs.conn_factory(2);
  const Schema = mongoose.Schema;

  const PedidoSchema = new Schema({
    data_hora: { type: Date, default: Date.now },
    itens: [Number],
    cliente: { type: Number },
    valor_total: { type: Number }
  });

  return conn.model('pedidos', PedidoSchema);
}
