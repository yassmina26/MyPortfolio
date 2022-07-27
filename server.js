require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const app = express();

//middleware; use is a middleware which has access to the request object 
app.use(express.json());
app.use(cors());
app.use(fileUpload({
    useTempFiles:true
}))

// connect to mongoDB 
const URI = process.env.MONGO_URL;
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {

    if (err) throw err;
    else {
        return console.log('mongo db is connected!');
    }

})


app.use('/user', require('./routes/userRoute'));
// About route 
app.use('/', require('./routes/aboutRoute'));
// Education route
app.use('/', require('./routes/educRoute'));
// Certif route
app.use('/', require('./routes/certifRoute'));
// Project route
app.use('/', require('./routes/projectRoute'));
// Upload route 
app.use('/', require('./routes/upload'));
// Contact route
app.use('/', require('./routes/contactRoute.js'));


PORT = process.env.PORT || 5000;
// Listening on port 5000
app.listen(PORT, () => {
    console.log(`server listening on port:${PORT}`);
})

