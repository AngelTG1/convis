import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true, // Esperar por conexiones si el pool está lleno
  connectionLimit: 10, // Límite máximo de conexiones en el pool
  queueLimit: 0 // No hay límite en la cola de conexiones
});

export default pool;
