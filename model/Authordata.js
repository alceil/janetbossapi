const mongoose=  require('mongoose');
 const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    author : String,
    details : String,
    image : String

});

// var Authordata =mongoose.model('AuthorSchema',AuthorSchema);

module.exports = mongoose.model('AuthorSchema',AuthorSchema);;