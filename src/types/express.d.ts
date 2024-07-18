import { User } from '../models/user';

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

export {}; // Esto convierte el archivo en un módulo y evita errores de ámbito global
