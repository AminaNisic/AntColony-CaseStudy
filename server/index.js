const express = require('express');
const app = express();
const cors = require('cors');

const db = require('./models')

app.use(express.json());
app.use(cors());

const dashboardRouter = require('./routes/Dashboard')
app.use("/dashboard", dashboardRouter)

const usersRouter = require('./routes/Users')
app.use("/auth", usersRouter);

const projectsRouter = require('./routes/Projects')
app.use("/projects", projectsRouter);

db.sequelize.sync().then(()=> {
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
})
   

