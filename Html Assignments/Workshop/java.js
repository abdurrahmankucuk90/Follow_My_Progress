// let player = 0;



// while (player == 0) {
//     for (let i = 1; i < 3; i++) {
//         let probab = Math.random();
//         if (probab < 0.1) {
//             console.log(`Player #${i} hits and knocks out!`)
//             console.log('Game over!!!')
//             player = 1
//             break
//         } else console.log(`Player #${i} hits`)

// }}

function starter(a, b) {
    for (const x of [a, b]) {
        chance = Math.random() * 100
        // console.log(x);
        if (chance < 10) {
            console.log(`player #${x} hits and knocks out!`);
            console.log(`Game over`);
            bool = false
            break
        } else
            console.log(`player #${x} hits`);

    }
};

player = 1
let bool = true
const iter = [Math.floor(Math.random() * 2) + 1];
while (bool) {
    if (player == iter) {
        starter(1, 2)
    }else{
        starter(2, 1)
    }
};