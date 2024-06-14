import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('app (health check)')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  healthCheck(): string {
    return this.appService.getHello();
  }
}
