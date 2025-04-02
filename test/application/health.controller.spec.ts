import { Test, TestingModule } from '@nestjs/testing';
import { HealthController } from '../../src/application/health.controller';
import { HealthService } from '../../src/infrastructure/services/health.service';

describe('healthController', () => {
  let healthController: HealthController;

  beforeEach(async () => {
    const appModule: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [HealthService],
    }).compile();

    healthController = appModule.get<HealthController>(HealthController);
  });

  describe('root', () => {
    it('should return "I"m Live"', () => {
      expect(healthController.getStatus()).toBe("I'm live");
    });
  });
});
