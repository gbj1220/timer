// version 0:
// console.log('\u0007');
const userInput = process.argv.slice(2)
const mins = 6000

// setTimeout((() => console.log('3 seconds have passed.')), 3000)

// setTimeout(() => console.log(`${userInput} seconds have passed!`), userInput * 1000)

for (const input of userInput) setTimeout(() => console.log(`${input} seconds have passed!`), mins * 1000)








