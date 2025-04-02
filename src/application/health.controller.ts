import { Controller, Get } from '@nestjs/common';
import { HealthService } from '../infrastructure/services/health.service';

@Controller()
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  getStatus(): string {
    return this.healthService.health();
  }
}
