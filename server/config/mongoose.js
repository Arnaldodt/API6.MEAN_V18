const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0/db_Nota', {useNewUrlParser: true});
module.exports = mongoose;





