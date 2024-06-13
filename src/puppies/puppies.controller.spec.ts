import { Test, TestingModule } from '@nestjs/testing';
import { PuppiesController } from './puppies.controller';
import { PuppiesService } from './puppies.service';

describe('PuppiesController', () => {
  let controller: PuppiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PuppiesController],
      providers: [PuppiesService],
    }).compile();

    controller = module.get<PuppiesController>(PuppiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
