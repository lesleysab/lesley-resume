let ContactModel = require("./models/Contact");

ContactModel.find({})
  .exec()
  .then(contact => {
    console.log(contact);
  });

//   const newContacts= new UserModel(request.body);
//   newUser.save()
//   .then(savedUser => {
//     response.json(savedUser);
//   });

module.exports.create = function create(request, response) {
  return response.json({});
};
