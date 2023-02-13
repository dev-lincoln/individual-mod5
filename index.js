import readlineSync from 'readline-Sync';
import chalk from 'chalk';


const propriedade = [];

let input = '';

console.log('Digite as propriedades CSS ou digite "SAIR" para finalizar.');

while (input.toLowerCase() !== 'sair') {
  input = readlineSync.question('Digite a propriedade: ');
  if (input.toLowerCase() !== 'sair') {
    propriedade.push(input);
  }
}

console.log('Lista das propriedades que foram digitadas CSS:');
console.log(chalk.yellow(propriedade.sort().join('\n')));