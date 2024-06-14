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

  async findAll() {
    const puppies = await this.prisma.puppy.findMany();
    return puppies;
  }

  async findOne(id: string) {
    const puppy = await this.prisma.puppy.findUnique({
      where: {
        id,
      },
    });
    return puppy;
  }

  async update(id: string, updatePuppyDto: UpdatePuppyDto) {
    const updatedPuppy = await this.prisma.puppy.update({
      where: {
        id,
      },
      data: updatePuppyDto,
    });
    return updatedPuppy;
  }

  async remove(id: string) {
    const deletedPuppy = await this.prisma.puppy.delete({
      where: {
        id,
      },
    });
    return deletedPuppy;
  }
}
