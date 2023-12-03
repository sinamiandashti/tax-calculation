import { Injectable, Inject } from '@nestjs/common';
import Country from 'src/common/constants/country';
import { Order } from 'src/order/repo/order.repository';
import {TAX_STRUCTURE} from '../common/constants/tax-structure';
import OrderType from '../common/constants/order-type';
import { UserService } from '../user/user.service';

@Injectable()
export class TaxService {

    constructor(
        @Inject(UserService) private userService: UserService,
    ) {}

    async calculateTax(userId: string, country: Country, orders: Order[], newFilledOrder: Order): Promise<void> {
        for (const order of orders) {
            let averageBuyPrice = 0;
            let totalBuyAmount = 0;
            for (const eachOrder of orders) {
                if(eachOrder.type === OrderType.buy || eachOrder.type === OrderType.deposit) {
                    totalBuyAmount += eachOrder.amount;
                }
            }
            averageBuyPrice = totalBuyAmount / orders.length;
            const diff = newFilledOrder.amount - averageBuyPrice;
            const payableTax = diff * TAX_STRUCTURE[country].percentage;
            await this.userService.updateUserBalanceAndTax(userId, payableTax, newFilledOrder.amount);
        }
    }
}
