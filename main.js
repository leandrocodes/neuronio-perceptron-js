const percep = Perceptron(dataset.length)

// console.log(percep)

//percep.predict()
percep.fit(dataset, desiredOutput)

//percep.predict([1.0, 1.0])

let results = document.querySelector('#results')

for(let i = 0; i<dataset.length; i++){
  results.innerHTML += `<li>${percep.predict(i)}</li>`
}