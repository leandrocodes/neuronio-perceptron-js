const Perceptron = (size, learningRate) =>{
  return{
    weights: Array(++size).fill(0),
    lr: learningRate || 0.01,
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
          err = desired[i] - prediction
          this.weights[0] += this.lr * err 
          for(j in input){
            this.weights[j+1] += this.lr * err * input[i][j]
          }
        }
        it += 2
      }
      console.log(this.weights)
    } 
  }
}