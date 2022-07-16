

const register = ( req, res )=>{
    
    
    res.json({
            msg: 'Registro'
        }) 

    }
 
    


const login = ( req, res )=>{
    res.json({ msg: 'Login' })
}










export {

    login,
    register

}