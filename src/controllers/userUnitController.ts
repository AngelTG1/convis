import { Request, Response } from 'express';
import { UserUnitService } from '../services/userUnitService';
import { UserUnit } from '../models/UserUnit';

export class UserUnitController {
  private userUnitService: UserUnitService;

  constructor() {
    this.userUnitService = new UserUnitService();
  }

  async assignUnitToUser(req: Request, res: Response): Promise<void> {
    const userUnit: UserUnit = req.body;
    try {
      await this.userUnitService.assignUnitToUser(userUnit);
      res.status(201).send('Unit assigned to user successfully');
    } catch (error) {
      res.status(500).send('Error assigning unit to user');
    }
  }
}
