import { Inject, Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import {Order} from "src/order/repo/order.repository";
import Country from "src/common/constants/country";
import {OrderFilledDto} from '../dto/order-filled.dto';
import {OrderService} from '../order.service'

@Injectable()
export class OrderFilledListener {
    constructor(
        @Inject(OrderService) private orderService: OrderService,
    ) {
    }
    @OnEvent('order.filled')
    async handleOrderCreatedEvent(eventBody: OrderFilledDto) {
        // handle and process "OrderCreatedEvent" event

        // Check validation of incoming event's body

        await this.orderService.orderFilled(eventBody)

    }
}
