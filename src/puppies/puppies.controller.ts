import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CreatePuppyDto } from './dto/create-puppy.dto';
import { UpdatePuppyDto } from './dto/update-puppy.dto';
import { PuppiesService } from './puppies.service';

@Controller('puppies')
export class PuppiesController {
  constructor(private readonly puppiesService: PuppiesService) {}

  @Post()
  async create(@Res() res: Response, @Body() createPuppyDto: CreatePuppyDto) {
    res.status(HttpStatus.CREATED).send();
    return await this.puppiesService.create(createPuppyDto);
  }

  @Get()
  findAll() {
    return this.puppiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.puppiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePuppyDto: UpdatePuppyDto) {
    return this.puppiesService.update(+id, updatePuppyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.puppiesService.remove(+id);
  }
}
