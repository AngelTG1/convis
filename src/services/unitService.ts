import { Unit } from '../models/unit';
import { UnitRepository } from '../repositories/unitRepository';

export class UnitService {
  private unitRepository: UnitRepository;

  constructor() {
    this.unitRepository = new UnitRepository();
  }

  async createUnit(unit: Unit): Promise<void> {
    await this.unitRepository.createUnit(unit);
  }
}
