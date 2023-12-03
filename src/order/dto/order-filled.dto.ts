import { ApiProperty } from '@nestjs/swagger';
import OrderType from '../../common/constants/order-type';

export class OrderFilledDto {
    @ApiProperty({
        type: String,
        enum: OrderType,
        enumName: 'OrderType'
    })
    type: string;

    @ApiProperty()
    id: string;

    @ApiProperty()
    amount: number;

    @ApiProperty()
    fromCurrency: string;

    @ApiProperty()
    toCurrency: string;

    @ApiProperty()
    userId: string;
}
