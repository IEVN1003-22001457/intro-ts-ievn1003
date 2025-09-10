
interface Producto{
    desc:string,
    precio:number
}
const telefono:Producto={
    desc:"Pixel 7 pro",
    precio:7000
}
const tablet:Producto={
    desc:"iPad Air",
    precio:25000
}

function calcularISV(productos:Producto[]):number{
    let total = 0;
    for(let producto of productos){
        total += producto.precio
    }
    return total * 0.15
}

const articulos = [telefono, tablet]
const isv = calcularISV(articulos)
console.log("ISV: " + isv)

/*

Desestructuración en parámetros de función

*/

function calcularISV2(productos:Producto[]):[number, number]{
    let total = 0;
    for(let producto of productos){
        total += producto.precio
    }
    return [total, total * 0.15]
}
console.log(calcularISV2(articulos))

const [total, isv2] = calcularISV2(articulos)
console.log("Total: " + total)
console.log("ISV2: " + isv2)