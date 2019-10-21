const percep = Perceptron(dataset.length)

console.log(percep)

percep.fit(dataset, desiredOutput)

let results = document.querySelector('#results')

results.innerHTML += `<li>${percep.predict([1.0, 1.0])}</li>`