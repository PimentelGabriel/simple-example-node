import express from 'express';

const app = express();

app.get('/', (req, res)=>{
    res.json({
        msg: "Simple app to learn 'how deploy a app at AWS'"
    })
});

app.get('/about', (req, res)=>{
    res.json({
        author: "Gabriel Costa",
        data: "23/03/2022",
        dataInServer: Date()
    });
});

app.listen(3000);