import { Injectable } from '@nestjs/common';
import Country from '../../common/constants/country';
import Repo from '../../common/repo/repo';

interface User {
    id: string;
    email: string;
    country: Country;
    balance: number;
    totalTaxPaid: number;
    // Add additional fields if needed
}

@Injectable()
export class UserRepo extends Repo<User> {
    // Implement additional methods if needed
}
