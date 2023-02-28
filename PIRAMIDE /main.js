console.log("piramide lateral");

let piramide = "";

for (let i=0; i < 7; i++) {
    for (let j=0; j<i; j++){
        piramide += '*';
    }
    piramide += '\n';
}

for (let i=5; i>0; i--) {
    for (let j=0; j < i; j++) {
        piramide += '*';
    }
    piramide +='\n';
}
console.log(piramide);
