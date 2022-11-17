const exp = require("express");
const router = exp.Router();

const {body , validationResult} = require('express-validator');

const valNotas = require("../controllers/notas")

router.get('/TNota', (req, res) => valNotas.Trae(req, res));

router.post('/CNota', (req, res) => {
    // const errores = validationResult(req)
    // if (!errores.isEmpty())
    // {
    //     let arrErr = errores.array();
    //     res.status(404).json(arrErr)
    // }
    // else {    
        valNotas.Crea(req, res)
    // }
});

module.exports = router;

// , [
//     body('nota','Ingrese Nombre, entre 3 a 100 caracteres.')
//         .exists()
//         .isLength({min:3})
//         .isLength({max:100})
// ]