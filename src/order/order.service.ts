import {Inject, Injectable} from '@nestjs/common';
import {OrderFilledDto} from './dto/order-filled.dto';
import {Order} from './repo/order.repository';
import {TaxService} from '../tax/tax.service';
import {UserService} from '../user/user.service';
import Country from '../common/constants/country';
import {EventEmitter2} from '@nestjs/event-emitter'

@Injectable()
export class OrderService {

    constructor(
        @Inject(TaxService) private taxService: TaxService,
        @Inject(UserService) private userService: UserService,
        private eventEmitter: EventEmitter2
    ) {
    }

    async orderFilled(newOrder: OrderFilledDto): Promise<void> {
        // update order if needed
        // update user balance
        // update tax
        const user = await this.userService.getUser(newOrder.userId);

        const previousOrders: Order[] = [];
        const userCountry: Country = Country.AT; // Retrieve user country from user service -> const user = await this.userService.getUser(orderFilledDto.userId); -> find user


        this.taxService.calculateTax(user, userCountry, previousOrders, newOrder.amount)

        this.eventEmitter.emit(
            'order.filled',
            newOrder,
        );

    }
}
