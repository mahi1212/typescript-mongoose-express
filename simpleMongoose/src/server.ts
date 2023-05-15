import mongoose from 'mongoose';
import app from './app'

const port: number= 5000


// DB Connection
async function run() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
        console.log('Database connected with mongoose')

        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })

    } catch (err) {
        console.log(`found error on connceting DB ${err}`)
    }

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
run();


console.log('running with warning')