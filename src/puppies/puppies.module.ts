import { Module } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { PuppiesController } from './puppies.controller';
import { PuppiesService } from './puppies.service';

@Module({
  controllers: [PuppiesController],
  providers: [PuppiesService, PrismaService],
})
export class PuppiesModule {}
