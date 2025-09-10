
import { Producto, calcularISV2 } from "./05-desestructura-funciones";

const carrito:Producto[] = [
    {desc:"Iphone 14", precio:1500},
    {desc:"Ipad Air", precio:1200},
    {desc:"Macbook Pro", precio:3000}

];

const[total, isv] = calcularISV2(carrito);
console.log("Total: " + total);
console.log("ISV: " + isv);
