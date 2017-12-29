# hack-assembler

A javascript assembler for the hack language. 

## Install CLI

    sudo npm install -g hack-assembler

## Usage CLI

    hack-asm ./program.asm > program.hack

## Usage as lib

    npm install --save hack-assembler

## Code example as lib

    var assembler = require('hack-assembler')
    
    // code => string of assemble code
    // Comments will be removed
    var codeObj = new assembler(code)

    // Get machine code as string
    var machineCode = codeObj.getAssembleCode()
    console.log(machineCode)


## License

MIT © [Dennis Iversen](https://github.com/diversen)
