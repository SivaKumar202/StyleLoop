import app from './app.js';
import dotenv from 'dotenv';
import connectDB from './Db.js';

dotenv.config({path:"backend/config/.env"})
app();
connectDB();



// make sure the path to app.js is correct
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});