import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/userRouter';
import pool from './database'; // Importa el pool de conexión a la base de datos

const app = express();
const port = 3000;

// Middleware para parsear JSON en las solicitudes
app.use(bodyParser.json());

// Rutas de usuario
app.use('/api', userRouter);

// Verificar conexión a la base de datos al iniciar la aplicación
pool.getConnection()
  .then(connection => {
    console.log('Database connected successfully');
    connection.release(); // Liberar la conexión al pool
  })
  .catch(error => {
    console.error('Error connecting to database:', error.message);
    process.exit(1); // Salir de la aplicación si hay un error de conexión
  });

// Iniciar servidor
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
