module.exports = class Perceptron {

  constructor(x_train, y_train, epochs = 1000, learn_rate = 0.35) {

    this.accuracy = 0
    this.samples = 0
    this.x_train = x_train
    this.y_train = y_train

    this.epochs = epochs
    this.learn_rate = learn_rate

    this.bias = 0
    this.weights = new Array(x_train[0].length)

    for (let n = 0; n < x_train[0].length; n++) {
      this.weights[n] = this.random()
    }
  }


  current_accuracy () {
    return this.accuracy / this.samples
  }

  random () {
    return Math.random() * 2 - 1
  }


  activation (n) {
    return n < 0 ? -1 : 1
  }


  predict (input) {
    let total = this.bias
    this.weights.forEach((w, index) => { total += input[index] * w })
    return this.activation(total)
  }

  fit () {

    for (let e = 0; e < this.epochs; e++) {

      for (let i = 0; i < this.x_train.length; i++) {

        let prediction = this.predict(this.x_train[i])
        console.log('Saída desejada: ' + this.y_train[i] + '    Saída do Modelo: ' + prediction)

        this.y_train[i] === prediction ? this.accuracy += 1 : this.accuracy -= 1
        this.samples++

        let loss = this.y_train[i] - prediction

        for (let w = 0; w < this.weights.length; w++) {
          this.weights[w] += loss * this.x_train[i][w] * this.learn_rate
        }

        this.bias += loss * this.learn_rate
      }

      console.log(this.current_accuracy())
      console.log(e)
    }
  }
}