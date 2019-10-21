const Perceptron = (size, learningRate) =>{
  return{
    weights: Array(++size).fill([0.75, 0.5, -0.6]),
    lr: learningRate,
    predict (inputs) {
      //console.log(this.weights)
      let activation = this.weights[0]
      for (input in inputs){
        activation += this.weights[input+1] * inputs[input]
      }
      return activation >= 0 ? 1 : -1
    },
    fit(input, desired){
      let prediction, err, it = 0
      while(it < this.it){
        for(i in input){
          prediction = this.predict(input[i])
          error = desired[i] - prediction
          this.weights[0] += this.lr * error 
          console.log(this.weights[0])
        }
      }
    } 
  }
}