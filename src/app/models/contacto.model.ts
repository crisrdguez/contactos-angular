export class Contacto{
    id: string | undefined;
    nombre:string | undefined;
    apellido:string | undefined;
    localidad:string | undefined;
    email:string | undefined;
    edad:number | undefined;
    genero:string | undefined;

    constructor(id:string|undefined, nombre:string|undefined, apellido:string|undefined, localidad:string|undefined, email:string|undefined, edad:number|undefined, genero:string|undefined){
        this.id=id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.localidad=localidad;
        this.email=email;
        this.edad=edad;
        this.genero=genero;
        
    }
}