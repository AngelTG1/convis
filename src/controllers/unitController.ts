import { Request, Response } from 'express';
import { Unit } from '../models/unit';
import { UnitService } from '../services/unitService';

export class UnitController {
  private unitService: UnitService;

  constructor() {
    this.unitService = new UnitService();
  }

  async createUnit(req: Request, res: Response): Promise<void> {
    const unit: Unit = req.body;
    try {
      await this.unitService.createUnit(unit);
      res.status(201).send('Unit created successfully');
    } catch (error) {
      console.log('Error creating unit', error);
      res.status(500).send('Error creating unit');
    }
  }
}
