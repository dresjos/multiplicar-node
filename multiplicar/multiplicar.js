//Requirers
const fs = require('fs');
const colors = require('colors');


//The way I solved the exeercise on video 34 of Node course
// let listarTabla = (base, limite) => {
//     return new Promise((resolve, reject) => {
//         if (limite < 1) {
//             reject(`El valor limite: ${limite} es invalido`);
//         } else {
//             let li = '';
//             for (let i = 1; i <= limite; ++i) {
//                 li += `${base} * ${i} = ${base*i}\n`;
//             }
//             resolve(`${li}`);
//         }
//     });
// }

//**Esta es la forma que el profesor lo resolvio poniendo un valor por defecto para limite */
let listarTabla = (base, limite = 10) => {
    console.log('======================'.green);
    console.log(`===tabla de ${ base }====`.green);
    console.log('======================'.white);
    for (let i = 1; i <= limite; ++i) {
        console.log(`${base} * ${i} = ${base*i}`);
    }

}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un numero`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; ++i) {
            data += `${base} * ${ i} = ${ base*i} \n`;
        }

        fs.writeFile(`tablas/table-${base}.txt - Nuevo`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);

        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}