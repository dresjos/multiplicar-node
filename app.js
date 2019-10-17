// //Requirers
// const fs = require('fs');

const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];
switch (comando) {

    case 'listar':
        //This is how I solved it: 
        // listarTabla(argv.base, argv.limite)
        //     .then(lista => console.log(`${lista}`))
        //     .catch(e => console.log(e));
        listarTabla(argv.base, argv.limite);
        //console.log('Listar');
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo.green } - Nuevo`))
            .catch(e => console.log(e));
        //console.log('CREAR');
        break;

    default:
        console.log('Comando no reconocido');
}


//console.log(argv);
//const fs = require('express'); archivos de paquetes que otra persona hizo y no son nativos de node
// const fs= require('./fs'); archivos que nosotros escribimos

//let base = 4;

//let argv2 = process.argv;

// let parametro = argv[2];
// let base = parametro.split('=')[1];

//Codigo movido a multiplicar.js
//************************************************
// let data = '';
// for (let i = 1; i <= 10; ++i) {
//     data += `${base} * ${ i} = ${ base*i} \n`;
// }

// fs.writeFile(`tablas/table-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${base}.txt ha sido grabado!`);
// });
//***********************************************************


//console.log(process.argv);

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${ archivo }`))
//     .catch(e => console.log(e));