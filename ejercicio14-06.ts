import fs from "node:fs";

let productos: string[] = [`leche`, `Galletitas`, `Harina`, `Queso`];
let contenidoString: string = ``;
for (let i: number = 0; i < productos.length; i++) {
    contenidoString += `${productos[i]} `;
};
fs.writeFileSync(`./productos.txt`, contenidoString);
let datosLeidosProductos: string = fs.readFileSync(`./productos.txt`, `utf-8`);
let datos2: string = datosLeidosProductos.trim();
let nuevoArrayProductos: string[] = datos2.split(` `);

let precios: number[] = [525, 3500, 400, 1999];
let contenidoStringPrecios: string = precios.toString();
fs.writeFileSync(`./precios.txt`, contenidoStringPrecios);
let datosLeidosPrecios: string = fs.readFileSync(`./precios.txt`, `utf-8`);
let datos1: string = datosLeidosPrecios.trim();
let nuevoArrayPrecios: string[] = datos1.split(` `);
parseInt(contenidoStringPrecios);




console.log(contenidoStringPrecios);
//console.log(precios);
console.log(nuevoArrayPrecios);
//console.log(contenidoString);
console.log(nuevoArrayProductos);


