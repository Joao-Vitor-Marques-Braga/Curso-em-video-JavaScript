var num = [4,6,1,7,2]

console.log(`${num}`)
console.log(`${num[3] = 2}`)

for(var pos=0; pos< num.length; pos++){
    console.log(`a posição: ${pos} tem valor: ${num[pos]}`)
}

for (var posição in num){
    console.log(num[posição])
}