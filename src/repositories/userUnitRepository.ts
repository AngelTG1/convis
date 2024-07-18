import pool from '../database';
import { UserUnit } from '../models/UserUnit';

export class UserUnitRepository {
  async assignUnitToUser(userUnit: UserUnit): Promise<void> {
    const query = `INSERT INTO user_unit (unit_id, user_id, created_at, updated_at) 
                   VALUES (?, ?, NOW(), NOW())`;
    const values = [userUnit.unit_id, userUnit.user_id];
    await pool.execute(query, values);
  }
}
