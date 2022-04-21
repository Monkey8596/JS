var op1 = 'piedra'
var op2 = 'papel'
var op3 = 'tijera'

var resultado =
function(user, cpu){
    if (user != cpu){
        if(user===op1 && cpu === op3){
            console.log('Usuario Gana '+op1)
        } else if (user === op2 && cpu=== op1){
            console.log('Usuario Gana '+op2)
        } else if (user===op3 && cpu === op2){
            console.log('Usuario Gana '+op3)
        } else{
            console.log('CPU Gana ')
        }
    }else if (user===cpu){
        console.log('Empate')
    }
}