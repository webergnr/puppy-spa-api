import { ApiProperty } from '@nestjs/swagger';

export class CreateServiceDto {
  @ApiProperty()
  priority: number;

  @ApiProperty()
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';

  @ApiProperty()
  services: string;

  @ApiProperty()
  puppyId: string;
}
