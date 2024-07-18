import { UserUnit } from '../models/UserUnit';
import { UserUnitRepository } from '../repositories/userUnitRepository';

export class UserUnitService {
  private userUnitRepository: UserUnitRepository;

  constructor() {
    this.userUnitRepository = new UserUnitRepository();
  }

  async assignUnitToUser(userUnit: UserUnit): Promise<void> {
    await this.userUnitRepository.assignUnitToUser(userUnit);
  }
}
