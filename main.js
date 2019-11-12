let perceptron = require('./perceptron')

let x = [[1, 1], [0, 0], [1, 1]]

let y = [1, 0, 1]
let p = new perceptron(x, y, epochs=10, learn_rate=.1)

p.fit()
console.log('PREDICT')
console.log(p.predict([1, 1]))