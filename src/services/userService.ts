import { User } from '../models/user';
import { UserRepository } from '../repositories/userRepository';
import bcrypt from 'bcrypt';

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(user: User): Promise<void> {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await this.userRepository.createUser(user);
  }
}
