const PORT = process.env.PORT || 3000;
const express = require('express');
const path = require('path')

const database = require('./config')
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

(async () => { await database.sync(); })();

//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.json());

app.use('/tasks', taskRoutes);
app.use('/users', userRoutes);

/*app.get('/', (req, res) => {
  res.render('index')
})*/

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

//desestruturacao aprender
//stack e heap
//passando por valor e por referencia variaveis
//mtos conceitos para lembrar/aprender =)

