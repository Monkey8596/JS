var op1 = 'piedra'
var op2 = 'papel'
var op3 = 'tijera'

function resultado(user,cpu){

switch (true){

    case user===op1 && cpu === op3:
        console.log('Usuario Gana');
        break;
    case user === op2 && cpu=== op1:
        console.log('Usuario Gana');
        break;
    case user===op3 && cpu === op2:
        console.log('Usuario Gana');
        break;
    case user===cpu:
            console.log('Empate');
        break;
    default: 
        console.log('CPU Gana')
}
}
resultado(op1,op3)