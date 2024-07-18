export interface User {
    user_id?: number;
    name: string;
    address?: string;
    phone_num?: string;
    age?: number;
    role_id?: number; // Nuevo campo para el ID del rol
    username: string;
    password: string;
    updated_at?: Date;
    created_at?: Date;
  }
  