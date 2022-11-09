var idade = 14
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log('não vota')
} else if (idade <18 || idade > 65) {
        console.log('voto opcional')
    } else {
        console.log('vota')
    }

// menor que 16 não vota
// 16 até 18 voto opcional
// maior que 18 vota