import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';         // ✅ added this line
import products from './data/products.js'; // add .js if using ES modules
import cors from 'cors';

dotenv.config();

const port = 5000;
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/api/products', (req, res) => {
  res.send(products);                // ✅ fixed comma
});

app.listen(port, () =>
  console.log(`Server running in mode on port ${port}`)
);
