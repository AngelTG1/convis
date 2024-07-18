import { Request, Response } from 'express';
import { UserService } from '../services/userService';
import { User } from '../models/user';

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async createUser(req: Request, res: Response): Promise<void> {
    const user: User = req.body;
    try {
      await this.userService.createUser(user);
      res.status(201).send('User created successfully');
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).send('Error creating user');
    }
  }
}
