const readline = require('readline');

let table = new Array(26);
let inputstr;
let keystr;


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function make_table() {
  return new Promise(function(resolve, reject) {
    for (let i = 0; i < table.length; i++) {
      table[i] = new Array(26);
    }

    for (let i = 0; i < table.length; i++) {
      for (let j = 0; j < table[i].length; j++) {
        table[i][j] = i+j > 25 ? i+j-26 : i+j;
        table[i][j] = String.fromCharCode(table[i][j] + 97);
      }
    }

    resolve('success');
  });
}


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
    let resultstr = '';

    for (let i = 0; i < inputstr.length; i++) {
      resultstr += table[inputstr[i].charCodeAt(0) - 97][keystr[i%keystr.length].charCodeAt(0) - 97];
    }

    console.log(resultstr);
    
    resolve('');
  })
}


async function main() {
  await make_table();

  await inputkey();
  await inputstring();

  await encrypt();

  rl.close();

}



main()
  .then(() => console.log('success'))
  .catch(console.log);