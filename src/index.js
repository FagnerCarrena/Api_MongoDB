import express from "express";
import db from "./config/dbConnect.js";
import rotas from "./roteador.js";

db.on("error", console.log.bind(console, "erro de conexão"))
db.once("open", ()=>{
    console.log("Conexão com o banco feita com sucesso")
})


const app = express();
app.use(express.json())
app.use(rotas)


app.listen(3000)