const fs = require('fs');

fs.readdir('./data/zadanie02', (err, files) => {
    if(err === null) {
        console.log('Lista plików: ');
        files.forEach(file => {
            console.log(file);
            fs.readFile(`./data/zadanie02/${file}`, 'utf8', (err, data) => {
                if(err === null) {
                    console.log('Sukces!', data);
                } else {
                    console.log('Błąd podczas odczytu', err);
                }
            })
        });
    } else {
        console.log('Bład podczas listowania: ', err);
    }
});