const mongoose =        require('mongoose');
      // schemas:
var   User =            require('../models/User_Schema'),
      Track =           require('../models/Track_Schema'),
      // variables:
      projectStrings =  require('../config');


/************************** ROUTE: insertUser **************************/

exports.insertUser = (req, res) => {

      console.log("Enter route(POST): /insertUsers");

      isUniqueEmail(req.body.email).then((result, error) => {
            if (result) {
                  // if result TRUE:
                  creatUser(req.body.name, req.body.email, req.body.password, req.body.accessibility,
                        req.body.disables, req.body.birthDay, req.body.profilePicture).then((result, error) => {
                        if (error) return res.status(500).send(projectStrings.ERROR_REGISTRATION);
                        res.status(200).send(result);
                  });
            } else {
                  res.status(200).send(projectStrings.ERROR_USER_EXIST);
                  console.log(`RESULT: ${result}`);
            }
      }, error => {
            console.log(error);
      });
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

var creatUser = (_name, _email, _password, _accessibility, _disables, _birthDay, _profilePicture) => { // return message

      console.log("Enter function: creatUser");

      return new Promise((resolve, reject) => {
            console.log(`_name, _email, _password, _accessibility,_disables, _birthDay, _profilePicture: 
                        ${_name, _email, _password, _accessibility,_disables, _birthDay, _profilePicture}`);

            User.create({
                  name: _userName,
                  email:_email,
                  password: _password,
                  accessibility: _accessibility,
                  disables: _disables,
                  birthDay: _birthDay,
                  profilePicture: _profilePicture
            }, (err, msg) => {
                  if (err) {
                        console.log(projectStrings.ERROR_DB_CREATE_USER);
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
      
      deleteUser(req.params.title).then((result,error) => {
            console.log("userName: " + req.params.userName);
              if(result){
                // if result TRUE:  
                console.log(`RESULT: ${result}`);
                console.log(`The user ${req.params.userName} have been deleted.`)
                res.status(200).send(result);      
              }
              else{
                // if result FALSE: 
                console.log(`RESULT: ${result}`);
                res.status(500).send(projectStrings.ERROR_USER_NOT_EXIST);
              }
            }, error =>{
                res.status(500).send(error);
              console.log(error);
           });

};

var deleteUser = (_title) => {      // return booean
  
      console.log("Enter function: deleteUser");
      
      return new Promise((resolve, reject)=> {
  
        console.log(`_title: ${_title}`);
    
        User.findOne({title:_title}, (err, usr) => {
            if (err) {
              console.log(projectStrings.ERROR_TITLE_NOT_EXIST);
              resolve(false);
            }
            else if(usr){
    
              //foreach loop that go on all the user subject's and remove him.
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
