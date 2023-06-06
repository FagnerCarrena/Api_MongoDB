import express from "express";


import getLivros from "./controladores/livros.js"

const rotas = express()

rotas.get("/", getLivros)

export default rotas