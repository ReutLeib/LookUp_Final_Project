const mongoose     = require('mongoose');

var   User         = require('../models/UserSchema'),
      Track        = require('../models/TrackSchema'),
      settings     = require('../config'),
      onlyNotEmpty = require('../controllers/onlyNotEmpty');  //  Function that checks and validates Dields - used for update empty params issue


/************************** ROUTE: insertUser **************************/

exports.insertUser = (req, res) => {
      console.log("Enter route(POST): /insertUsers");

      // This will do the work
      const newUser = new User(req.body);
      newUser.save(err => {
            if (err){
              console.log(err);
              return res.status(500).send({ "Message": "Internal server error" });
            }
            console.log(`User ${req.body.email} has been created successfully`);
            res.status(200).send(`User ${req.body.email} has been created successfully`);
      });


      // This will do the work too.
      // createUser(req.body.name, req.body.email, req.body.password, req.body.accessibility,
      //             req.body.birthDay, req.body.profilePicture).then((result, error) => {
      //       if (error)
      //             return res.status(500).send(settings.ERROR_REGISTRATION);
      //       res.status(200).send(result);
      // });

      // isUniqueEmail(req.body.email).then((result, error) => {
      //       if (result) {
      //             // if result TRUE:
      //             createUser(req.body.name, req.body.email, req.body.password, req.body.accessibility,
      //                   req.body.disables, req.body.birthDay, req.body.profilePicture).then((result, error) => {
      //                   if (error) return res.status(500).send(settings.ERROR_REGISTRATION);
      //                   res.status(200).send(result);
      //             });
      //       } else {
      //             res.status(200).send(settings.ERROR_USER_EXIST);
      //             console.log(`RESULT: ${result}`);
      //       }
      // }, error => {
      //       console.log(error);
      // });
};

var isUniqueEmail = (email) => { // return booean

      console.log("Enter function: isUniqueEmail");

      return new Promise((resolve, reject) => {
            console.log(email);

            User.find({
                  email: email
            }, (err, email) => {
                  if (err) {
                        reject(err);
                  }
                  if (email == "") {
                        // not found
                        console.log("email is NOT exist");
                        resolve(true);
                  } else {
                        // found
                        console.log(`email existing: ${email}`);
                        resolve(false);
                  }
            });
      });
};

var createUser = (_name, _email, _password, _accessibility, _birthDay, _profilePicture) => { // return message
      console.log("Enter function: createUser");
      return new Promise((resolve, reject) => {
            console.log(`${_name, _email, _password, _accessibility, _birthDay, _profilePicture}`);
            User.create({
                  name: _name,
                  email:_email,
                  password: _password,
                  accessibility: _accessibility,
                  birthDay: _birthDay,
                  profilePicture: _profilePicture
            }, (err, msg) => {
                  if (err) {
                        console.log(settings.ERROR_DB_CREATE_USER);
                        resolve({});
                  }
                  resolve(msg);
            });
      });
};

////////////////////////////////////////////////////////////////////////////////////


/************************** ROUTE: deleteUserByEmail **************************/
exports.deleteUserByEmail = (req, res) => {

      console.log("Enter route(DELETE): /deleteUserByEmail");

      deleteUser(req.params.email).then((result,error) => {
            console.log("email: " + req.params.email);
              if(result){
                // if result TRUE:
                console.log(`RESULT: ${result}`);
                console.log(`The user ${req.params.userName} have been deleted.`)
                res.status(200).send(result);
              }
              else{
                // if result FALSE:
                console.log(`RESULT: ${result}`);
                res.status(500).send(settings.ERROR_USER_NOT_EXIST);
              }
            }, error =>{
                res.status(500).send(error);
              console.log(error);
           });

};

var deleteUser = (_email) => {      // return booean

      console.log("Enter function: deleteUser");

      return new Promise((resolve, reject)=> {

        console.log(`_email: ${_email}`);

        User.findOne({email:_email}, (err, usr) => {
            if (err) {
              console.log(settings.ERROR_TITLE_NOT_EXIST);
              resolve(false);
            }
            else if(usr){

              //foreach loop that go on all the user favoriteTracks's and remove him.
              usr.subjects.forEach((element) =>{
                deleteUserFromSubjectByUserName_UserSchema(_userName, element).then((result,error) => {
                  if(result){}
                  else{}
              });
            });
                console.log(`${usr}`);
                //deleteing the user
                var myquery = { userName: _userName };
                User.deleteOne(myquery, (err, obj)=> {
                  if (err) {
                    console.log(err);
                    resolve(false);
                  }
                  else{
                    console.log(obj);
                    resolve(true);
                  }
                });
              }
              else{
                resolve(false);
              }

            });
        });
    };
////////////////////////////////////////////////////////////////////////////////////
