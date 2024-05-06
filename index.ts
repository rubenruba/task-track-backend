import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import indexRouter from './src/routes';
import Mongo from './src/services/Mongo';

const app = express();
const port = process.env.PORT ?? 8080;
const mongo = new Mongo(process.env.MONGO_CLUSTER_CONNECTION ?? '');

// Connect to mongo database
mongo.init();

// Middlewares
app.use(express.json());
app.use(cors({ origin: "https://task-track-frontend.vercel.app" }));
app.use((req, _, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
}); // Logger

app.use(indexRouter); // Add the application router

app.listen(port, () => console.log(`App listening in port ${port}...`))

export default app;