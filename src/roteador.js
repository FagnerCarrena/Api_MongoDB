import express from "express";
import LivroController from "./controladores/livros.js";
import AutoresController from "./controladores/autores.js";

const rotas = express()

rotas.get("/livros", LivroController.listarLivros)
rotas.get("/livros/:id", LivroController.listarLivrosPorId)
rotas.post("/livros", LivroController.cadastrarLivro)
rotas.put("/livros/:id", LivroController.atualizarLivro)
rotas.delete("/livros/:id", LivroController.excluirLivro)


rotas.get("/autores", AutoresController.listarAutores)
rotas.get("/autores/:id", AutoresController.listarAutoresPorId)
rotas.post("/autores", AutoresController.cadastrarAutor)
rotas.put("/autores/:id", AutoresController.atualizarAutor)
rotas.delete("/autores/:id", AutoresController.excluirAutor)

export default rotas