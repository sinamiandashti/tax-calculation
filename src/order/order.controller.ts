import {Body, Controller, Post, Request} from '@nestjs/common';
import {OrderFilledDto} from './dto/order-filled.dto';

@Controller('order')
export class OrderController {

    @Post('/order-filled')
    async orderFilledHandler(@Body() orderFilledDto: OrderFilledDto, @Request() req) {

    }
}
