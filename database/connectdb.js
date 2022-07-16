
import mongoose from 'mongoose'

try {

    await mongoose.connect(process.env.URI_MONGO);
    console.log('Conectado a la base de datos 😀');

} catch (error) {
    
    console.log('Error de conexion a la base de datos');
}
