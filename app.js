const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const database = require('./config')
const Task = require('./models/Task')
const User = require('./models/userz');

let tasks = [];
    
(async () => { await database.sync(); })();

app.use(express.json());


/* This is used to make sure that once the server is started, you can reload the browser and see the Express Yourself machine */
app.use(express.static('public'));


//#region TASKS
app.get('/tasks', async (req, res) => {
    const tasks = await Task.findAll(); 
    res.status(200).json(tasks);
});

app.post('/tasks', async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json(task);
});

app.put('/tasks/:id', async (req, res)=>{
    const taskId = parseInt(req.params.id);
    
   await Task.update(
    req.body,
    {
      where: {
        id: taskId,
      },
    },
   );
   res.status(200).send();
})


app.delete('/tasks/delete/:id', async (req,res)=>{
    const task = await Task.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(201).json(task);
});

//#endregion



app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

//desestruturacao aprender
//stack e heap
//passando por valor e por referencia variaveis
//mtos conceitos para lembrar/aprender =)