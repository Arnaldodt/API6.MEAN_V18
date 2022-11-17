const mongoose = require('mongoose');

const esquemaAut  = new mongoose.Schema({
        nota: {
            type:String,
            required:[true,'campo requerido'],
            minlength:[5,'El largo menor permitido es de 5 carectares'],
            maxlength:[100,'El largo mayor permitido es de 100 carectares']
            // ,match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"debe ser correo"]
        }
    },{timestamps:true})

const Nota = mongoose.model('esq_Nota', esquemaAut);

module.exports = Nota;