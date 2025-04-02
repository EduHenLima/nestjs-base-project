import { Module } from '@nestjs/common';
import { HealthController } from './application/health.controller';
import { HealthService } from './infrastructure/services/health.service';

@Module({
  imports: [],
  controllers: [HealthController],
  providers: [HealthService],
})
export class AppModule {}
