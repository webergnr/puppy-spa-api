import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePuppyDto } from './dto/create-puppy.dto';
import { UpdatePuppyDto } from './dto/update-puppy.dto';
import { PuppiesService } from './puppies.service';

@Controller('puppies')
export class PuppiesController {
  constructor(private readonly puppiesService: PuppiesService) {}

  @Post()
  async create(@Body() createPuppyDto: CreatePuppyDto) {
    return await this.puppiesService.create(createPuppyDto);
  }

  @Get()
  async findAll() {
    return await this.puppiesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const puppy = await this.puppiesService.findOne(id);
    if (!puppy) {
      return { error: 'Puppy not found' };
    }
    return puppy;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePuppyDto: UpdatePuppyDto,
  ) {
    return await this.puppiesService.update(id, updatePuppyDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.puppiesService.remove(id);
  }
}
