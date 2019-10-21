const Perceptron = size =>{
  return{
    weights: Array(++size).fill(0),
    predict (inputs) {
      let activation = this.weights[0]
      console.log(activation)
    } 
  }
}