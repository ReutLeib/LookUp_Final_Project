var   express         = require('express'),
    //   event           = require('events'),
      bodyParser      = require('body-parser'),
      fs              = require('fs'),
      userCtl         = require('./controllers/User_ctl.js'),
      trackCtl        = require('./controllers/Track_ctl.js'),
      app             = express();
      port            = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('port',port);
// app.use('/', express.static('./public/html'));//for API 

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Accept");
    next();
});

/************************** All routes **************************/

/**************** User controller: ****************/

/** insertUser 
    values not null:
        name, email, password, accessibility
    values can be null:
        disables, birthDay, profilePicture
**/
app.post('/insertUser/', userCtl.insertUser);

/** deleteUserByEmail 
    values not null:
        email
**/
app.delete('/deleteUserByEmail/:email', userCtl.deleteUserByEmail);


/**************** Track controller:  ****************/

/** insertTrack 
    values not null:
        type, title, startPoint, endPoint
    values can be null:
        middlePoint, comment, rating, diffucultyLevel, changesDuringTrack 
**/
app.post('/insertTrack/', trackCtl.insertTrack);

/** deleteTrackBytitle 
    values not null:
         title 
**/
app.delete('/deleteTrackBytitle/:title', trackCtl.deleteTrackBytitle);


//////////////////////////////////////////////////////////////////////////////
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});