import inquirer from 'inquirer';
import colors from 'colors';

inquirer
.prompt([
  {
    type: 'input',
    message: 'What would you like to log?',
    name: 'text',
  },

    {
      type: 'list',
      message: 'What is your favorite color?',
      name: 'color',
      choices: ['red', 'blue', 'green', 'yellow', 'cyan', 'magenta'],
    },
  ])
  .then((response) =>
    console.log(
      colors[response.color](` ${response.color} ${response.text} `)
    )
  );