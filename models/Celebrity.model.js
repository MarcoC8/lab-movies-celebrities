//  Add your code here
const mongoose = require('mongoose');

const Scheme = mongoose.Schema;

const celebrityScheme = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;