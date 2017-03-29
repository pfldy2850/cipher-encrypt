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

function encrypt() {
  return new Promise(function (resolve, reject) {
    let tmpstr = '';

    for (let i = 0; i < inputstr.length; i++) {
      let curcode = inputstr[i].charCodeAt(0) - 97;
      let mulcode = i % 12;
      let addcode = i % 26;

      tmpstr += String.fromCharCode((curcode * mulcode + addcode) % 26 + 97);
    }

    console.log(tmpstr);
    resolve('');
  })
}


async function main() {
  await inputstring();

  await encrypt();

  rl.close();

}



main()
  .then(() => console.log('success'))
  .catch(console.log);