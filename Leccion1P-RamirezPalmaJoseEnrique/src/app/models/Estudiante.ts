export class Estudiante {
    nombre: string;
    apellido: string;
    cedula: string;
    estado: boolean;
    edad: string;
    fecha: Date;

    constructor(nombre: string, apellido: string, edad: string, cedula: string, estado: boolean, fecha: Date) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula
        this.estado = estado;
        this.fecha = fecha;
        this.edad = edad;
    }
}