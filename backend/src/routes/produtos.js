const express = require("express");
const router = express.Router();
const ProdutoController = require("../controllers/ProdutoController");

router.get("/", ProdutoController.listarProdutos);
router.post("/", ProdutoController.inserirProduto);
router.get("/:id", ProdutoController.mostrarProduto);
router.put("/:id", ProdutoController.update);
router.delete("/:id", ProdutoController.destroy);

module.exports = router;