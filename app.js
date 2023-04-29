const express = require('express');
const app = express();
const router = require('./router/router');
const port = 5000;
app.use(router);

app.listen(port, ()=> {
    console.log('Rodando na porta 5000...')
})