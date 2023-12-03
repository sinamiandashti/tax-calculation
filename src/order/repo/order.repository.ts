import { Injectable } from '@nestjs/common';
import OrderType from '../../common/constants/order-type';
import Currency from '../../common/constants/currency';
import Repo from '../../common/repo/repo';

export interface Order {
    id: string;
    amount: number;
    fromCurrency: Currency;
    type: OrderType;
    toCurrency: Currency;
    userId: string;
    // Add additional fields if needed
}

@Injectable()
export class OrderRepo extends Repo<Order> {
    updateOrder(order: Order): Promise<void> {}

    createOrder(order: Order): Promise<void> {}

    getUserOrders(userId: string): Promise<Order[]> {}
    // Implement additional methods if needed
}
