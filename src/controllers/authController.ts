import { Request, Response, NextFunction } from 'express'; // Import NextFunction for TypeScript

import { AuthService } from '../services/authService';

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  async login(req: Request, res: Response): Promise<void> {
    const { username, password } = req.body;
    const token = await this.authService.login(username, password);
    if (token) {
      res.json({ token });
    } else {
      res.status(401).send('Invalid credentials');
    }
  }

  async verifyToken(req: Request, res: Response, next: NextFunction): Promise<void> {
    const token = req.headers.authorization?.split(' ')[1];
    if (token) {
      const decoded = this.authService.verifyToken(token);
      if (decoded) {
        (req as any).user = decoded;
        next();
      } else {
        res.status(401).send('Invalid tokens');
      }
    } else {
      res.status(401).send('No token provided');
    }
  }
}
