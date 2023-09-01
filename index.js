/** 
1. Declare a function below called `tellStory()`
2. Inside your new function return a single string using backticks (**``**) that tells the whole story of 'A Tale of Fire and Functions'
3. Uncomment the console.log() line by deleting the two forward slashes in front of it and click the Run button above to check it has worked.
*/

function tellStory() {
  return `Once upon a time,
in a dimly lit room filled with the hum of computers,
a programmer named Jamie sat down to write a JavaScript program.

With a strong cup of coffee by their side,
Jamie began by calling a function named makeCoffee().

To their surprise,
an error popped up on the screen: 'makeCoffee() is not defined'.

Scratching their head,
Jamie realized they had forgotten to declare the function first!

With a chuckle and a facepalm,
they quickly added makeCoffee() to their code.

Suddenly,
the computer screen displayed: 'Your coffee is ready!'.

Feeling triumphant,
Jamie leaned back and thought, 'Maybe I should add a drinkCoffee() function next?'.

In the end,
Jamie had not only mastered JavaScript functions,
but also became the go-to coffee expert in the coding world.`
}

function tellCustomStory(name) {
  return `Once upon a time,
in a dimly lit room filled with the hum of computers,
a programmer named ${name} sat down to write a JavaScript program.

With a strong cup of coffee by their side,
${name} began by calling a function named makeCoffee().

To their surprise,
an error popped up on the screen: 'makeCoffee() is not defined'.

Scratching their head,
${name} realized they had forgotten to declare the function first!

With a chuckle and a facepalm,
they quickly added makeCoffee() to their code.

Suddenly,
the computer screen displayed: 'Your coffee is ready!'.

Feeling triumphant,
${name} leaned back and thought, 'Maybe I should add a drinkCoffee() function next?'.

In the end,
${name} had not only mastered JavaScript functions,
but also became the go-to coffee expert in the coding world.`
}

console.log(tellStory());
console.log(tellCustomStory('Frankie'));

module.exports = {
  tellStory,
  tellCustomStory
}
