import cors from 'cors';
import 'dotenv';
import express from 'express';
import 'express-async-errors';
import '../infra/database/prismaClient';
import globalError from './middlewares/globalError';
import { logRequest } from './middlewares/logRequest';
import routes from './routes';


const app = express();
app.use(express.json());
app.use(cors())

app.use(logRequest)
app.use('/api', routes)
app.use(globalError)

app.listen( process.env.PORT_SERVER  , () => {
  console.log(`✅ Server started on port ${ process.env.PORT_SERVER }`)
})