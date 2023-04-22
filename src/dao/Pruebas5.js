const {Cliente} = require("pg")

const ObtenerDatos = async => {

    const cliente = new Cliente({
        user:"postgres",
        host: "localhost",
        database:"postgres",
        password:"postgres",
        port: 5432,
    });

    await cliente.connect();

    const res = await cliente.query("select * from usuario");
    const resultado = resultado.rowd[0].message;
    await cliente.end();
    return result;

}

ObtenerDatos().them((result) =>{
    console.log(result)
})