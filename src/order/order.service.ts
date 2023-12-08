import {Inject, Injectable} from '@nestjs/common';
import {OrderFilledDto} from './dto/order-filled.dto';
import {Order} from './repo/order.repository';
import {TaxService} from '../tax/tax.service';
import Country from '../common/constants/country';
import {OrderFilledEvent} from "src/order/events/order.filled.event";

@Injectable()
export class OrderService {

    constructor(
        @Inject(TaxService) private taxService: TaxService,
        private eventEmitter: EventEmitter2
    ) {
    }

    async orderFilled(newOrder: OrderFilledDto): Promise<void> {
        // update order if needed
        // update user balance
        // update tax

        let OrderFilledEvent: any;
        OrderFilledEvent = new OrderFilledEvent();
        OrderFilledEvent.orderId = OrderFilledDto.id;
        OrderFilledEvent.payload = {};
        this.eventEmitter.emit(
            'order.filled',
            OrderFilledEvent,
        );

    }
}
