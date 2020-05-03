import express from 'express';


const app = express();
const port = 9000;
const one: number = 1;
const two: number = 2;
const three: boolean = true;


app.get('/', (_req, res) => res.send(`${one}+${two}=${one + two}`));
app.listen(port);

console.log('rebase test')