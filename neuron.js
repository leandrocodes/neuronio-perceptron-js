const Perceptron = (size, learningRate, iterations) => {
  return{
    weights: Array(++size).fill(0),
    lr: learningRate || 0.01,
    it: iterations || 1000,
    predict (inputs) {
      let activation = this.weights[0];
      for(let i = 0; i < inputs.length; i++){
        activation += this.weights[i+1] * inputs[i]
      }
      return activation >= 0 ? 1 : -1
    },
    fit (input, desired) {
      let prediction, err, it = 0
      while(it < this.it){
        for(let i = 0; i < input.length; i++){
          prediction = this.predict( input[i] )
          err = desired[i] - prediction
          this.weights[0] += this.lr * err
          for(let j = 0; j < input[i].length; j++){
            this.weights[j+1] += this.lr * err * input[i][j]
          }
        }
        //console.log(it)
        
        it ++
      }
      console.table(this.weights) 
      console.table(it) 
    }
  }
}