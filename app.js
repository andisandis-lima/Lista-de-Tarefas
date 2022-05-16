const express = require('express');

const app = express();






app.use((req,res, next) => {
    res.status(404).render('notFound')
});

const PORT = 3000;

app.listen(PORT, () => { 
    console.log('Server rodando na porta 3000')
})     