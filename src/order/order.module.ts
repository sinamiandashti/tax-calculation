import {Module} from '@nestjs/common';
import {OrderService} from './order.service';
import {OrderController} from './order.controller';
import {EventEmitterModule} from '@nestjs/event-emitter';

@Module({
    providers: [OrderService],
    controllers: [OrderController],
    imports: [
        EventEmitterModule.forRoot()
    ],
})
export class OrderModule {
}
