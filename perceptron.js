const percerptron = () => {
	weights = [0.75, 0.5, -0.6]
	lr = 0.2
	it = 6
	return {

		predict (inputs) {
			let activation = weights[0]
			for (let i = 0; i < inputs.length; i++) {
				activation += weights[i + 1] * inputs[i]
			}
			return activation >= 0 ? 1 : -1
		},

		fit (input, target) {
			let prediction, error, epochs = 0
			while(epochs < it) {
				for (let i = 0; i < input.length; i++) {
					prediction = this.predict(input[i])
					error = target[i] - prediction
					weights[0] += lr * error
					for (let j = 0; j < input[i].length; j++){
						weights[j + 1] += lr * error * input[i][j]  
					}
				}
				epochs++
			}
			console.table(weights)
			console.log(`epochs number: ${epochs}`)
		}
	}
}

module.exports = percerptron