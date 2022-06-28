import mongoose from "mongoose";

mongoose.connect("mongodb+srv://user:password@cluster0.a9kyeyr.mongodb.net/alura-node?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true })

let db = mongoose.connection


export default db
