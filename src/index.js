import express from "express";
import db from "./config/dbConnect.js"

db.on("error", console.log.bind(console, "erro de conexão"))
db.once("open", ()=>{
    console.log("Conexão com o banco feita com sucesso")
})




import rotas from "./roteador.js";

const app = express();
app.use(rotas)
app.use(express.json())

app.listen(3000)