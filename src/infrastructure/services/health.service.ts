import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  health(): string {
    return "I'm live";
  }
}