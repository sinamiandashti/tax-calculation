import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    async updateUserBalanceAndTax(userId: string, taxAmount: number, income: number): Promise<void> {
        if(taxAmount > 0) {
            // update user balance and tax
        } else {
            // update user balance
        }
    }
}
