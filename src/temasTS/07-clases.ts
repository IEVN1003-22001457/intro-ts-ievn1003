
class Persona{
    nombre:string;
    edad:number;
    
    constructor(nombre:string, edad:number){
        this.nombre = nombre;
        this.edad = edad;
    }
    imprimir(){
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}
let persona:Persona;
persona = new Persona("Tony", 45);
persona.imprimir();