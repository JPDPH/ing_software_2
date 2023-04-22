const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const data = require("./test_data") // importamos data de test
const { usuario} = require("./usuario")
const { response } = require("express")

const PUERTO = process.env.PORT || 4444

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true
}))
app.use(cors()) // politica CORS (cualquier origen) <---- TODO: cuidado!!!
app.use(express.static("assets")) // <-- configuracion de contenido estatico


//1. Servicio que nos devuelva una lista de carreras
// path: "/carreras" metodo: GET
app.get("/usuario", async (req, resp) => {
    const listaUsuario = await usuario.findAll()

    resp.send(listaUsuario)
})



app.listen(PUERTO, () => {
    console.log(`Servidor web iniciado en puerto ${PUERTO}`)
})