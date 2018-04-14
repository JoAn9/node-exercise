const fs = require('fs');

fs.readFile('./data/zadanieDnia/test.txt', 'utf8', (err, data) => {
    if(err === null) {
        let text = '';
        const array = data.split("");

        array.forEach((val,i) => {
            if(i % 2 === 0) {
                text += val.toUpperCase()
            } else {
                text += val.toLowerCase()
            }
        });

        fs.writeFile('./data/zadanieDnia/test.txt', text, err => {
            if(err === null) {
                console.log('U mnie działa!');
            } else {
                console.log('cos w writeFile poszlo nie tak', err);
            }
        })
    } else {
        console.log('cos w readFile poszlo nie tak', err);
    }
});