import { ApiProperty } from '@nestjs/swagger';

export class TaxInvocationDto {
    @ApiProperty()
    userId: string;
}
