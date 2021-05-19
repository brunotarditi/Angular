export class NuevoUsuario {
    nombre: string;
    nombreUsuario: string;
    clave: string;
    email: string;

    constructor(nombre: string, nombreUsuario: string, clave: string, email: string){
        this.nombre = nombre;
        this.nombreUsuario = nombreUsuario;
        this.clave = clave;
        this.email = email;
    }
}
