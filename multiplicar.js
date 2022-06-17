

const fs = require('fs');

const crearArchivoTablaMultiplicar = async (numero = 1) => {
    let salida;

for(let i = 1; i <= 10; i++){
    salida += `${numero} X ${i} = ${numero*i}\n`;
}

fs.writeFile(`tabla-${numero}.txt`, salida, (err) =>{
    if (err) throw err;
    console.log('The file has been saved!');
});

try{
    fs.writeFileSync(`tabla-${numero}.txt`, salida);
    return `tabla-${numero}.txt`;
}
catch(error){
   throw error;
}
}

module.exports = {
    crearArchivoTablaMultiplicar
}