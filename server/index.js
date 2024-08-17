require('dotenv').config() // Secures variables
const app = require('./utils/app') // Backend App (server)
const mongo = require('./utils/mongo') // MongoDB (database)
const {PORT} = require('./constants')
const authRoutes = require('./routes/auth')
// const posts =require('./controllers/posts');

async function launch() {
  await mongo.connect()

  app.get('/', (req, res) => res.status(200).json({message: 'Hello World!'}))

  app.use('/api', authRoutes)


  // app.use('/auth', authRoutes)

  app.listen(PORT, () => {
    console.log(`🚀 Server is listening on port: ${PORT}`)
  })
}

launch()