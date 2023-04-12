const app = require('./app');
const db = require('./config/db')
const UserModel = require('./model/user.model')
const Parameter1 = require('./model/Parameter1')

const port = 3000;


app.get('/', (req,res)=>{
    res.send("hello world uhuuyyy slebewwwww")
});


app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`);
  });