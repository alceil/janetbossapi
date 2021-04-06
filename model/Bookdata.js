const mongoose=  require('mongoose');
 const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    author : String,
    genre : String,
    image : String
});

var Bookdata =mongoose.model('Bookdata',BookSchema);

module.exports = Bookdata;