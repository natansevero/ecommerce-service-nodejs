module.exports = app => {
  app.get('/', (req, res) => {
    res.status(200).json({ "Status Service": "Tudo OK!" });
  })
}
