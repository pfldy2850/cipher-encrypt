const readline = require('readline');

let table = new Array(26);
let inputstr;
let keystr;

let freq = new Array(26);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function inputkey() {
  return new Promise(function (resolve, reject) {
    rl.question('key :', function (answer) {
      keystr = answer;

      resolve('');
    }); 
  });
}

function inputstring() {
  return new Promise(function (resolve, reject) {
    rl.question('string :', function (answer) {
      inputstr = answer;

      resolve('');
    }); 
  });
}

function getfreq() {
  return new Promise(function (resolve, reject) {
    for (let i = 0; i < freq.length; i++) freq[i] = 0;

    for (let i = 0; i < inputstr.length; i++) {
      freq[inputstr[i].charCodeAt(0) - 97]++;
    }

    for (let i = 0; i < freq.length; i++) freq[i] = freq[i]/inputstr.length;

    console.log(freq);

    resolve('');
  });
}

function encrypt() {
  return new Promise(function (resolve, reject) {
    for (let i = 0; i < 26; i++) {
      let tmpstr = '';
      
      for (let j = 0; j < inputstr.length; j++) {
        tmpstr += String.fromCharCode((inputstr[j].charCodeAt(0) - 97 + i) % 26 + 97);
      }

      console.log(i + ", " + tmpstr);
    }
    resolve('');
  })
}


async function main() {
  await inputstring();
  await getfreq();

  await encrypt();

  rl.close();

}



main()
  .then(() => console.log('success'))
  .catch(console.log);