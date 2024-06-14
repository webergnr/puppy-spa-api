import { ApiProperty } from '@nestjs/swagger';

export class CreatePuppyDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  breed: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  owner: string;
}
