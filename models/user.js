const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdEvents:[
        {
            // Creo los id que los usuarios hacen que se creen cada vez que hagan un evento
            type: Schema.Types.ObjectId,
            //Seteo la relacion
            ref: 'Event'
        }
    ]
});

module.exports = mongoose.model('User', userSchema);