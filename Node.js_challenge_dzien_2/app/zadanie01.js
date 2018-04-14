const fs = require('fs');

fs.readFile('./data/zadanie01/input.json', 'utf8', (err, data) => {
    if(err === null) {
    const array = JSON.parse(data);
    let sum = 0;
    for(let i=0;i<array.length;i++) {
        sum += array[i];
    }

    fs.writeFile('./data/zadanie01/sum.txt', sum, err => {
        if(err === null) {
        console.log('It works!');
    } else {
        console.log('cos w writeFile poszlo nie tak', err);
    }
})
} else {
    console.log('cos w readFile poszlo nie tak', err);
}
});
