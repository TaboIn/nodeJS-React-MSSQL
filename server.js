const express = require('express');
const cors = require('cors');
const dbOperation = require('./dbFiles/dbOperation');


const API_PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post('./api', async(req, res) => {
    console.log('called');

    const result = await dbOperation.getEmployees(req.body.name);
    res.send(result.recordset);
});

app.post('/hello', async(req, res) => {
    await dbOperation.createEmployee(req.body)
    const result = await dbOperation.getEmployees(req.Firstname);
    console.log('called');
    res.send(result.recordset);
});

app.listen(API_PORT, () => console.log(`listen on ${API_PORT} port`))