//objeto turista

class Usuario {
    #id;
    #nombre;
    #apellido;
    #correo;
    #telefono;
    #contra;

    constructor(id, nombre, apellido, correo, telefono, contra){
        this.#id = id;
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#correo = correo;
        this.#telefono = telefono;
        this.#contra = contra;
    }
    
    get getId(){
        return this.#id;
    }
    get getNombre(){
        return this.#nombre;
    }
    get getApellido(){
        return this.#apellido;
    }
    get getCorreo(){
        return this.#correo;
    }
    get getTelefono(){
        return this.#telefono;
    }
    get getContra(){
        return this.#contra;
    }
}