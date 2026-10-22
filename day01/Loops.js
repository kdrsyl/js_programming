for(let i = 0; i<5; i++) {
    console.log("Hello, World!");
}

console.log("--------------------  ");

for(let i = 1; i <= 10; i++) {
    console.log(i);
    if(i === 5) {
        break;
    }
}
console.log("--------------------  ");

for(let k = 1; k<= 10; k++) {
    if(k == 3 || k == 7) {
    continue;
    }
    console.log(k);
}