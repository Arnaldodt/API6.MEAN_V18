const Notas  = require("../models/modelo");

const classNotas  = {
    Trae: async (req, res) => {    
        try{
            const data = await Notas.find().sort({updatedAt:-1})
            res.status(200).json(data)
        }
        catch (err){
            res.status(404).json(err)
        }
    },
    Crea: async(req, res) => {   
        const NOT = new Notas;
        NOT.nota = req.body.nota

        try{
            const data = await Notas.create(NOT)
            res.status(200).json(data)
        }
        catch (err){
            res.status(404).json(err)
        }
    }
}

module.exports = classNotas;