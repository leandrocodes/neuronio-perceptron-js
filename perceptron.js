module.exports = class Perceptron {

  constructor(entries, desiredOutput, epochs = 6, learn_rate = 0.2) {

    this.accuracy = 0
    this.samples = 0
    this.entries = entries
    this.desiredOutput = desiredOutput

    this.epochs = epochs
    this.learn_rate = learn_rate

    this.bias = 1
    this.weights = [0.75, 0.5, -0.6]
  }

  current_accuracy () {
    return this.accuracy / this.samples
  }

  activation (n) {
    return n < 0 ? -1 : 1
  }

  predict (input) {
    let fnet = (this.weights[0] * input[0]) + (this.weights[1] * input[1]) * (this.weights[2] * this.bias)
    return this.activation(fnet)
  }

  fit () {

    for(let e = 0; e < this.epochs; e++){
      for (let i = 0; i < this.entries.length; i++) {
        let prediction = this.predict(this.entries[i])
        console.log('Saída desejada: ' + this.desiredOutput[i] + '  Saída do Modelo: ' + prediction)
        let loss = prediction - this.desiredOutput[i]
        if(loss !== 0){
          this.weights[0] = this.weights[0] * this.learn_rate * loss
          this.weights[1] = this.weights[1] * this.learn_rate * loss
          this.weights[2] = this.weights[2] * this.learn_rate * this.bias
        }
  
        console.log(loss)
        console.log(i)
        console.log(this.weights)
      }
    }

    //console.log(this.current_accuracy())
  }
}