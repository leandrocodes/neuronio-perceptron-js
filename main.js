let perceptron = require('perceptron')

let pcpt = perceptron()

pcpt.weights = [0.75, 0.5, -0.6]

pcpt.train([1, 1], 1)
pcpt.train([9.4, 6.4], -1)
pcpt.train([2.5, 2.1], 1)
pcpt.train([8, 7.7], -1)
pcpt.train([0.5, 2.2], 1)
pcpt.train([7.9, 8.4], -1)
pcpt.train([7, 7], -1)
pcpt.train([2.8, 0.8], 1)
pcpt.train([1.2, 3.0], 1)
pcpt.train([7.8, 6.1], -1)


let epochs = 0
while(!pcpt.retrain()) {
  epochs++
}
console.log(epochs)

pcpt.perceive([1, 1]) // => 1
pcpt.perceive([0, 1]) // => 0
pcpt.perceive([1, 0]) // => 0
pcpt.perceive([0, 0]) // => 0
console.log(pcpt.weights)
console.log(pcpt.delta)