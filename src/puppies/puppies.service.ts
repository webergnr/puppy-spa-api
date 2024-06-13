import { Injectable } from '@nestjs/common';
import { CreatePuppyDto } from './dto/create-puppy.dto';
import { UpdatePuppyDto } from './dto/update-puppy.dto';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class PuppiesService {
  constructor(private prisma: PrismaService) {}

  async create(createPuppyDto: CreatePuppyDto) {
    const puppy = await this.prisma.puppy.create({
      data: {
        age: createPuppyDto.age,
        breed: createPuppyDto.breed,
        name: createPuppyDto.name,
        owner: createPuppyDto.owner,
      },
    });
    return puppy;
  }

  findAll() {
    // return `This action returns all puppies`;
  }

  findOne(id: number) {
    // return `This action returns a #${id} puppy`;
  }

  update(id: number, updatePuppyDto: UpdatePuppyDto) {
    // return `This action updates a #${id} puppy`;
  }

  remove(id: number) {
    // return `This action removes a #${id} puppy`;
  }
}
