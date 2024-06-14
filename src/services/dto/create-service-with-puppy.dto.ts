import { ApiProperty } from '@nestjs/swagger';

export class CreateServiceWithPuppyDto {
  @ApiProperty()
  priority: number;

  @ApiProperty()
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';

  @ApiProperty()
  services: string;

  @ApiProperty()
  puppyName: string;

  @ApiProperty()
  puppyBreed: string;

  @ApiProperty()
  puppyAge: number;

  @ApiProperty()
  puppyOwner: string;
}
