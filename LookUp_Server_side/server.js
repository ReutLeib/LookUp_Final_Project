var   express         = require('express'),
      event           = require('events'),
      bodyParser      = require('body-parser'),
      fs              = require('fs'),
      app             = express();
      port            = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('port',port);
app.use('/', express.static('./public/html'));//for API 

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Accept");
    next();
});

/*** All routes ***/

// User controller:


// Track controller:


app.listen(port, () => {
    console.log(`listening on port ${port}`);
});



      // Examples ROUTES:
      // app.post('/insert/', userCtl.insertUser);                            // values: userName , password , name, age, city
      // app.get('/getAll/:userName',  userCtl.getAllVideosByUserName);       // value : userName
      // app.delete('/deleteUser/:userName', userCtl.deleteUserByUserName);   // value : userName
      // app.put('/UpdateUser/:userName/:city', userCtl.UpdateCityByUserName) // value : userName, city