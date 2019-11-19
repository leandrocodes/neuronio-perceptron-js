module.exports = class Perceptron {
	constructor(size, learningRate, epochs) {
		this.weights = [0.75, 0.5, -0.6]
		this.lr = learningRate || 0.2;
		this.it = epochs || 6;
	}

	predict (inputs) {
		let activation = this.weights[0];
		for (let i = 0; i < inputs.length; i++) {
			activation += this.weights[i + 1] * inputs[i];
		}
		return activation >= 0 ? 1 : -1;
	}

	fit (input, target) {
		let prediction, error, it = 0;
		while (it < this.it) {
			for (let i = 0; i < input.length; i++) {
				prediction = this.predict(input[i]);
				error = target[i] - prediction;
				this.weights[0] += this.lr * error;
				for (let j = 0; j < input[i].length; j++) {
					this.weights[j + 1] += this.lr * error * input[i][j];
				}
			}
			it += 1;
		}
		console.log(this.weights)
		console.log(this.it)
	}
}