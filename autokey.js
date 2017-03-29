const readline = require('readline');

let table = new Array(26);
let inputstr;
let keystr;


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
    let keyint = parseInt(keystr);
    let resultstr = String.fromCharCode((inputstr[0].charCodeAt(0) - 97 + keyint)%26 + 97);
    let resArr = new Array();

    resArr.push([inputstr[0].charCodeAt(0) - 97, keyint]);
    for (let i = 1; i < inputstr.length; i++) {
      resultstr += String.fromCharCode((inputstr[i-1].charCodeAt(0) - 97 + inputstr[i].charCodeAt(0) - 97)%26 + 97);
      resArr.push([inputstr[i].charCodeAt(0) - 97, inputstr[i-1].charCodeAt(0) - 97]);
    }

    console.log(resArr);
    console.log(resultstr);
    
    resolve('');
  })
}


async function main() {
  await inputkey();
  await inputstring();

  await encrypt();

  rl.close();

}



main()
  .then(() => console.log('success'))
  .catch(console.log);