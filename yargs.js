const { describe } = require("yargs");

const argv = require("yargs")
.option('b', {
    alias:'base',
    type: 'number',
    demandOption: true,
    describe: "Base para la tabla de multiplicar"
})
.argv;

module.exports = argv;