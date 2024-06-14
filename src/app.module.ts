import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PuppiesModule } from './puppies/puppies.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [PuppiesModule, ServicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
