import pool from '../database';
import { Unit } from '../models/unit';

export class UnitRepository {
  async createUnit(unit: Unit): Promise<void> {
    const query = `INSERT INTO unit (name, series, marca, placa, created_at) 
                   VALUES (?, ?, ?, ?, NOW())`;
    const values = [unit.name, unit.series, unit.marca, unit.placa];
    await pool.execute(query, values);
  }
}
