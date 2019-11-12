module.exports = class Perceptron {

  constructor(entries, desiredOutput, epochs = 1000, learn_rate = 1) {

    this.accuracy = 0
    this.samples = 0
    this.entries = entries
    this.desiredOutput = desiredOutput

    this.epochs = epochs
    this.learn_rate = learn_rate

    this.bias = 0
    this.weights = [0.75, 0.5, -0.6]
  }

  // acurácia 
  current_accuracy () {
    return this.accuracy / this.samples
  }

  // função de ativação
  activation (n) {
    return n < 0 ? -1 : 1
  }

  // calcula fnet
  predict (input) {
    let fnet = (this.weights[0] * input[0]) + (this.weights[1] * input[1]) + this.weights[2] * 1
    return this.activation(fnet)
  }
  
  fit () {
    for (let e = 0; e < this.epochs; e++) {

      for (let i = 0; i < this.entries.length; i++) {

        let prediction = this.predict(this.entries[i])
        console.log('Desejado: ' + this.desiredOutput[i] + '    Saída: ' + prediction)

        this.desiredOutput[i] === prediction ? this.accuracy += 1 : this.accuracy -= 1
        this.samples++

        let loss = this.desiredOutput[i] - prediction

        for (let w = 0; w < this.weights.length; w++) {
          this.weights[w] += loss * this.entries[i][w] * this.learn_rate
        }

        this.bias += loss * this.learn_rate
      }

      console.log(this.current_accuracy())
      console.log(e)
    }
  }
}