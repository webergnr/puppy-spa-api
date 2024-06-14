import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { CreateServiceWithPuppyDto } from './dto/create-service-with-puppy.dto';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Injectable()
export class ServicesService {
  constructor(private prisma: PrismaService) {}

  async create(createServiceDto: CreateServiceDto) {
    return await this.prisma.serviceOrder.create({
      data: {
        priority: createServiceDto.priority,
        // status: createServiceDto.status,
        status: createServiceDto.status,
        services: createServiceDto.services,
        timeOfArrival: new Date(),
        puppy: {
          connect: {
            id: createServiceDto.puppyId,
          },
        },
      },
      select: {
        id: true,
        priority: true,
        status: true,
        services: true,
        timeOfArrival: true,
        puppy: {
          select: {
            id: true,
            owner: true,
            name: true,
            breed: true,
            age: true,
          },
        },
      },
    });
  }

  async createWithNewPuppy(createServiceDto: CreateServiceWithPuppyDto) {
    await this.prisma.serviceOrder.create({
      data: {
        priority: createServiceDto.priority,
        status: createServiceDto.status,
        services: createServiceDto.services,
        timeOfArrival: new Date(),
        puppy: {
          create: {
            owner: createServiceDto.puppyOwner,
            name: createServiceDto.puppyName,
            breed: createServiceDto.puppyBreed,
            age: createServiceDto.puppyAge,
          },
        },
      },
    });
  }

  async findAll() {
    return await this.prisma.serviceOrder.findMany({
      select: {
        id: true,
        priority: true,
        status: true,
        services: true,
        timeOfArrival: true,
        puppy: {
          select: {
            id: true,
            owner: true,
            name: true,
            breed: true,
            age: true,
          },
        },
      },
    });
  }

  async findOne(id: string) {
    return await this.prisma.serviceOrder.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        priority: true,
        status: true,
        services: true,
        timeOfArrival: true,
        puppy: {
          select: {
            id: true,
            owner: true,
            name: true,
            breed: true,
            age: true,
          },
        },
      },
    });
  }

  async update(id: string, updateServiceDto: UpdateServiceDto) {
    return await this.prisma.serviceOrder.update({
      where: {
        id,
      },
      data: {
        priority: updateServiceDto.priority,
        status: updateServiceDto.status,
        services: updateServiceDto.services,
      },
      select: {
        id: true,
        priority: true,
        status: true,
        services: true,
        timeOfArrival: true,
        puppy: {
          select: {
            id: true,
            owner: true,
            name: true,
            breed: true,
            age: true,
          },
        },
      },
    });
  }

  async remove(id: string) {
    return await this.prisma.serviceOrder.delete({
      where: {
        id,
      },
    });
  }
}
