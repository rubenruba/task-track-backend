import express from 'express';
import indexRouter from './routes';
import 'dotenv/config';

const app = express();

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}...`);
});

// Middleware for JSON
app.use(express.json());

// Middleware function to see the request method and url
app.use((req, res, next) => {
    const message = `${req.method} ${req.url}`;
    console.log(message);
    next();
});

// Add the router
app.use(indexRouter);