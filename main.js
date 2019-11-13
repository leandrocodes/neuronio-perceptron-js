let perceptron = require('./perceptron')

const dataset = [
  [1.0, 1.0],
  [9.4, 6.4],
  [2.5, 2.1],
  [8.0, 7.7],
  [0.5, 2.2],
  [7.9, 8.4],
  [7.0, 7.0],
  [2.8, 0.8],
  [1.2, 3.0],
  [7.8, 6.1]
]

const desiredOutput = [1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1]

let p = new perceptron(dataset, desiredOutput, 6, learn_rate=.1)

p.fit()
console.log('PREDICT')
console.log(p.predict([1, 1]))
console.log(p.predict([9.4, 6.4]))
console.log(p.predict([2.5, 2.1]))
console.log(p.weights)