import { Body, Controller, Post, Request } from '@nestjs/common';
import {TaxInvocationDto} from './dto/tax-invocation.dto';

@Controller('tax')
export class TaxController {
    @Post('/tax-invocation')
    async getUserTaxDetails(@Body() body: TaxInvocationDto, @Request() req) {

    }

}
