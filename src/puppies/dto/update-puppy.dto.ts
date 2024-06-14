import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreatePuppyDto } from './create-puppy.dto';

export class UpdatePuppyDto extends PartialType(CreatePuppyDto) {
  @ApiProperty()
  age?: number;

  @ApiProperty()
  breed?: string;

  @ApiProperty()
  name?: string;

  @ApiProperty()
  owner?: string;
}
