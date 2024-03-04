const express = require("express");
const routes = express.Router();
const PedidoController = require("../controllers/PedidoController");

routes.get("/", PedidoController.listarPedidos);
routes.post("/", PedidoController.inserirPedido);
routes.get("/:id", PedidoController.mostrarPedido);
routes.delete("/:id", PedidoController.destroy);

module.exports = routes;