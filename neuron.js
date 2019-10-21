const Perceptron = size =>{
  return{
    weights: Array(++size).fill(0),
    predict (inputs) {
      let activation = this.weights[0]
      for (input in inputs){
        activation += this.weights[input+1] * inputs[input]
      }
      return activation >= 0 ? 1 : -1
    } 
  }
}