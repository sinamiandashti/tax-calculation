import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { OrderFilledEvent } from '../events/order.filled.event';
import {Order} from "src/order/repo/order.repository";
import Country from "src/common/constants/country";

@Injectable()
export class OrderFilledListener {
    @OnEvent('order.filled')
    handleOrderCreatedEvent(event: OrderFilledEvent) {
        // handle and process "OrderCreatedEvent" event
        const user = await this.userService.getUser(orderFilledDto.userId);

        const newOrder = await Order.find({id: orderFilledDto.id})
        const previousOrders: Order[] = [];
        const userCountry: Country = Country.AT; // Retrieve user country from user service -> const user = await this.userService.getUser(orderFilledDto.userId); -> find user


        this.taxService.calculateTax(user, userCountry, previousOrders, newOrder.amount)

    }
}
