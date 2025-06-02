import app from './server.js'
import connection from './database.js';



app.listen(app.get('port'),()=>{
    console.log(`Server ok on ${app.get('port')}`);
})

connection()