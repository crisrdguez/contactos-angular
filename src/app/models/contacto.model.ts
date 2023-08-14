export class Contacto{

    nombre:string | undefined;
    apellido:string | undefined;
    localidad:string | undefined;
    email:string | undefined;
    edad:number | undefined;
    genero:string | undefined;

    constructor(nombre:string|undefined, apellido:string|undefined, localidad:string|undefined, email:string|undefined, edad:number|undefined, genero:string|undefined){

        this.nombre=nombre;
        this.apellido=apellido;
        this.localidad=localidad;
        this.email=email;
        this.edad=edad;
        this.genero=genero;
        
    }
}