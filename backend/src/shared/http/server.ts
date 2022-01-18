import { app } from "./app"

app.listen( process.env.PORT_SERVER  , () => {
    console.log(`✅ Server started on port ${ process.env.PORT_SERVER }`)
  })