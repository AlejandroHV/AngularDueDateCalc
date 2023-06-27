import { Injectable } from '@angular/core';
import { PaySpan } from '../model/enums';
import LoanModel from '../model/loanModel';

@Injectable({providedIn: 'root'})
export class LoanService {
    loan = new LoanModel();
    constructor() { }

    calculate(fundDay: Date, holidays: Date[] | undefined, paySpan: PaySpan, payDay: Date, hasDirectDeposit: boolean)
    {
        
        return this.loan.calculate(
          new Date(fundDay),
          holidays,
          paySpan,
          payDay,
          hasDirectDeposit);
    }
    
}