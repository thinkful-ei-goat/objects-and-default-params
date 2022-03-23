//Join & Split


let arr = ["The","dog","runs", "fast"];

let str = arr.join(",") //String separated by space
console.log(str);

let newArr = str.split("");
console.log('split up string into array', newArr)

let arrOfObj=[
    {game:'Defender', type:['Ps2','Ps3']},
    {game:'Apex Legends', type:['Ps4', 'Ps5']},
    {game:'Uno All Wild', type:['Card','Gameboy']},
    {game:'Munchkins', type:['Card','Gameboy']},
]
console.log(arrOfObj.join(" "));

for(let obj of arrOfObj){
    console.log(`The game ${obj.game} can be played on ${obj.type.join(' and ')}`)
}

