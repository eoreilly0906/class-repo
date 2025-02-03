import inquirer from 'inquirer';
import colors from 'colors';
import fs from 'fs';
inquirer.prompt([
  {
    type: 'input',
    message: 'What is your name?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What languages do you know?',
    name: 'languages',
  },
  {
    type: 'input',
    message: 'What is your preferred method of communication?',
    name: 'communication',
  },
]).then((response) => {
  console.log(colors.brightMagenta(
   `${response.name} 
    ${response.languages} 
    ${response.communication}`));
  fs.writeFile('eddie.json', JSON.stringify(response, null, '\t'), (err) =>
    err ? console.error(err) : console.log('logged to file!')
  );
});
