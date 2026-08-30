const express = require('express')
const app = express()
const port = 3000

app.get('/', (_req, res) => {
  res.send('Welcome to Camper Bot\'s homepage!')
})

app.get('/hobbies', (_req, res) => {  
  res.send('I cycle, go boating, and play guitar.')
})

app.get('/skills', (_req, res) => {
  res.send('JavaScript, Node.js, and Express.js!')
})

app.use('/api/profile', (_req, res) => {
  const profile = {
    name: 'Camper Bot',
    hobbies: ['cycling', 'boating', 'guitar'],
    skills: ['JavaScript', 'Node.js', 'Express.js']
  }
  res.json(profile)
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})