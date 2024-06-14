import { PartialType } from '@nestjs/mapped-types';
import { CreateServiceDto } from './create-service.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateServiceDto extends PartialType(CreateServiceDto) {
  //   puppyId?: string;
  @ApiProperty()
  priority?: number;

  @ApiProperty()
  services?: string;

  @ApiProperty()
  status?: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
}
