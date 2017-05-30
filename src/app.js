/* Default server dependencies */
import express from 'express'
import graphqlHTTP from 'express-graphql'
import mongoose from 'mongoose'

/* Utils */
import dotenv from 'dotenv'
import colors from 'colors'
import favicon from 'serve-favicon'
import path from 'path'

/* Custom server dependencies */
import schema from './graphql'
import routes from './routes'
dotenv.config()

const app = express()

try {
  let host = process.env.MONGO_HOST || 'localhost'
  let port = process.env.MONGO_PORT || '27017'
  let user = process.env.MONGO_USER || ''
  let pwd = process.env.MONGO_PASS || ''
  let db = process.env.MONGO_DB || 'grapql-exmaple'
  let mdbUri = 'mongodb://'

  if (user === "" && pwd === "") {
    mdbUri = mdbUri + host + ':' + port + '/' + db
  } else {
    mdbUri = mdbUri + user + ":" + pwd + "@" + host + ':' + port + '/' + db
  }
  console.log(colors.green.underline("MONGODB URI"))
  console.log(colors.green(">> ") + mdbUri)
  mongoose.Promise = global.Promise
  app.connection = mongoose.connect(mdbUri)
} catch (error) {
  console.log(colors.green.underline("MONGO CONNECTION ERROR"))
  console.log(colors.green(">> ") + JSON.stringify(error))
}

app.use(express.static(path.join(__dirname, 'client/build')))
app.use(favicon(path.join(__dirname, 'client/build', 'favicon.ico')))
// app.use('/', routes)
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))

const port = process.env.SERVER_PORT || 5000
app.listen(port)
console.log("Application running on port " + colors.green(port))
console.log(colors.rainbow("GrapQL service running on /graphql"))
