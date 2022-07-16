import express from 'express'
import {body} from 'express-validator'
import { login, register } from '../controllers/auth.controller.js'
import { validationResultExpress } from '../middlewares/validationResultsExpress.js'
const router = express.Router()


router.post('/login', 
    [
        body('email', 'Formato de email incorrecto')
            .trim()
            .isEmail()
            .normalizeEmail(),

        body('password', 'Logitud minimo caracteres')
            .trim()
            .isLength({ min: 6 })
    ], validationResultExpress, login

    
)

router.post('/register', 
    [
        body('email', 'Formato de email incorrecto')
            .trim()
            .isEmail()
            .normalizeEmail(),

        body('password', 'Logitud minimo caracteres')
            .trim()
            .isLength({ min: 6 }),

        body('password', 'No coinciden las contraseñas')    
            .custom( ( value, { req } ) =>{
                if ( value !== req.body.repassword ) {
                    throw new Error( 'No coinciden las contraseñas' )
                }
                return value
            })

    ], validationResultExpress, register
)


export default router
