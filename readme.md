## Neurônio ***Perceptron*** 🧠 feito com Javascript 💛

### Como Criar um neurônio
```javascript 
  let perceptron = require('./perceptron')
  let p = perceptron()
```
### Você vai precisar de uma matriz representando o seu Dataset também, junto de um vetor com as saídas desejadas.
```javascript 
const dataset = [[1.0, 1.0], [9.4, 6.4], [2.5, 2.1]]

const target = [1, -1, 1]
```

### Depois é só treinar:
```javascript
  p.fit(dataset, target)
```

### Para predizer algum dado (depois de treinar):
```javascript 
  const predicted = p.predict([0.5, 2.2])
  console.log(predicted)
```