const MY_PWD_HASH = '5dca0fc4e306d92b2077ad85e7c4bd87a3e8648e';

//Twój kod
//
// '??TegoHasła'
// 'CodersLab'
// 'Node.js Szyfruje Pliki'
// 'Zaźółć Gęślą Jaźń'
// 'Moje Haslo 1@3!'
// '111#$((@)n'
// 'Dzisiaj Szyfruje 83'

const crypto = require('crypto');


const text = [
    '??TegoHasła',
    'CodersLab',
    'Node.js Szyfruje Pliki',
    'Zaźółć Gęślą Jaźń',
    'Moje Haslo 1@3!',
    '111#$((@)n',
    'Dzisiaj Szyfruje 83'
];

const algorithm = ['sha256', 'sha512', 'md5', 'rmd160'];

for(let i=0;i<algorithm.length;i++) {
    for(let j=0;j<text.length;j++) {
        const hash = crypto.createHmac(algorithm[i], text[j]).digest('hex');
        console.log(hash);
    }
}

const answer = crypto.createHmac('rmd160', 'Moje Haslo 1@3!').digest('hex');

console.log(answer);