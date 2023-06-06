import mongoose from "mongoose"

mongoose.connect("mongodb+srv://Fagner:123@cluster0.dc57bom.mongodb.net/Banco-da-Api");

let db = mongoose.connection;

export default db;