const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

let tasks = [];
// let task = {
//     id: 0,
//     name: '',
//     isDone: false,
//     creationDate: new Date()
// }

app.use(express.json());


/* This is used to make sure that once the server is started, you can reload the browser and see the Express Yourself machine */
app.use(express.static('public'));


// retornando as tasks existentes
app.get('/', (req, res) => {
    if (tasks.length === 0) {
        res.status(204)
           .send(tasks);
    }
    else {
        res.status(200)
           .json(tasks);
    }
});

// inserindo uma nova task
app.post('/tasks', (req, res) => {
    tasks.push(req.body);
    res.status(201)
       .json(req.body);
})

//desestruturacao aprender
//stack e heap
//passando por valor e por referencia variaveis
//mtos conceitos para lembrar/aprender =)

// atualizando uma task existente
app.put('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
        tasks[taskIndex] = req.body;
        res.status(200).json({ message: 'Tarefa atualizado com sucesso!' });
    } else {
        res.status(404).json({ message: 'Tarefa não encontrada!' });
    }
})

// deletando uma task pelo ID
app.delete('/tasks/delete/:id', (req, res) => {
    const taskId = parseInt(req.params.id); // pegando o id da tarefa

    const taskIndex = tasks.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1); // removendo a tarefa
        res.status(200).json({ message: 'Tarefa deletada com sucesso!' });
    } else {
        res.status(404).json({ message: 'Tarefa não encontrada!' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});