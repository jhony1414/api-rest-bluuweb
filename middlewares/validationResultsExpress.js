import { validationResult } from "express-validator";

const validationResultExpress = ( req, res, next ) =>{

    const errors = validationResult(req)
    
    if( !errors.isEmpty() ){

        console.log( errors.array() );
        return res.status(400).json( { errors: errors.array() } )

    }
    next()
    
}



export {
    validationResultExpress
}