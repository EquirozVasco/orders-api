const app = require('./app')
const sequelize = require('./utils/database');

sequelize
  .sync()
  .then(result => {
    console.log("Database connected");
    app.listen(3005);
  })
  .catch(err => console.log(err));