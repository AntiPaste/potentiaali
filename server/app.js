import express from 'express';
import cors from 'cors';

const questions = [
  {
    id: 1,
    question: 'Kuinka tämä tehdään?',
    choices: ['Näin', 'Noin', 'En tiedä'],
  },
];

const app = express();
app.use(cors());

app.get('/', (req, res) => res.json(questions));
app.get('/skill', (req, res) => {
  console.log(req.connection.remoteAddress, req.query);
});

app.get('/answer', (req, res) => {
  console.log(req.connection.remoteAddress, req.query);
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
