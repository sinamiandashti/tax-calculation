import { Injectable } from '@nestjs/common';
import {OrderFilledDto} from './dto/order-filled.dto';
import {Order} from './repo/order.repository';

@Injectable()
export class OrderService {
    async orderFilled(orderFilledDto: OrderFilledDto): Promise<void> {
        // update order if needed

    }
}
