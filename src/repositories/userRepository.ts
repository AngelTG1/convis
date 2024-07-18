import pool from '../database';
import { User } from '../models/user';

export class UserRepository {
  async createUser(user: User): Promise<void> {
    const query = `INSERT INTO user (name, address, phone_num, age, role_id, username, password, created_at) 
                   VALUES (?, ?, ?, ?, ?, ?, ?, NOW())`;
    const values = [user.name, user.address, user.phone_num, user.age, user.role_id, user.username, user.password];
    await pool.execute(query, values);
  }

  async findByUsername(username: string): Promise<User | null> {
    const query = 'SELECT * FROM user WHERE username = ?';
    const [rows] = await pool.execute(query, [username]);
    const users = rows as User[];
    return users.length ? users[0] : null;
  }
}
