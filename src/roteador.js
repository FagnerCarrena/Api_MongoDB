import express from "express";
import LivroController from "./controladores/livros.js";

const rotas = express()

rotas.get("/", LivroController.listarLivros)
rotas.get("/:id", LivroController.listarLivrosPorId)
rotas.post("/livros", LivroController.cadastrarLivro)
rotas.put("/livros/:id", LivroController.atualizarLivro)
rotas.delete("/:id", LivroController.excluirLivro)

export default rotas