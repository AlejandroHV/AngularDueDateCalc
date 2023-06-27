 import * as Utils from '../utils/utils';
 import {WeekendDays , PaySpan, CalculationState , LoopType} from './enums';
 
 class LoanModel {
    constructor() {

    }

    calculate(fundDay: Date, holidays: Date[] | undefined, paySpan: PaySpan, payDay: Date, hasDirectDeposit: boolean): Date {
        let dueDate: Date = new Date(fundDay);
        //Get only the payDate of the payment in order to calculate the due date on the same month of the fundDay.
        dueDate.setDate(payDay.getDate());
        let loopType: LoopType = LoopType.Forward;
        let state: CalculationState = CalculationState.INITIAL;

        while ((state as CalculationState) !== CalculationState.COMPLETE) {
            switch ((state as CalculationState)) {
                case CalculationState.INITIAL:
                    dueDate= CalculateNextPaymentDate(dueDate, paySpan);
                    loopType = LoopType.Forward;
                    state = CalculationState.DEPOSIT;
                    break;
                case CalculationState.DEPOSIT:
                    if (!hasDirectDeposit) {
                        dueDate.setDate(dueDate.getDate() + 1);

                    }
                    state = CalculationState.WEEKEND;
                    break;

                case CalculationState.WEEKEND:
                    if (Utils.isWeekend(dueDate)) {
                        state = CalculationState.LOOPTYPE;
                    } else {
                        state = CalculationState.HOLIDAY;
                    }
                    break;

                case CalculationState.HOLIDAY:
                    if (Utils.datefallsOnDates(dueDate, holidays)) {

                        loopType = LoopType.Reverse;
                        state = CalculationState.LOOPTYPE;
                    } else {
                        state = CalculationState.FINAL;
                    }

                    break;
                case CalculationState.LOOPTYPE:
                    switch (loopType) {
                        case LoopType.Forward:
                            dueDate.setDate(dueDate.getDate() + 1);
                            break;
                        case LoopType.Reverse:
                            dueDate.setDate(dueDate.getDate() - 1);
                            break;

                    }
                    state = CalculationState.WEEKEND;
                    break;
                case CalculationState.FINAL:
                    let futureFundDay = new Date(fundDay);
                    futureFundDay.setDate(fundDay.getDate() + 10);
                    if (dueDate >= futureFundDay) {
                        state = CalculationState.COMPLETE;

                    } else {
                        state = CalculationState.INITIAL;
                    }
                    break;

            }
        }
        return dueDate;
    }

}

function CalculateNextPaymentDate(payDate: Date, paySpan: PaySpan) {
    let newPayDate: Date = new Date(payDate);
    switch (paySpan) {
        case PaySpan.BiWeekly:
            newPayDate.setDate(newPayDate.getDate() + 14);
            break;
        case PaySpan.Weekly:
            newPayDate.setDate(newPayDate.getDate() + 7);
            break;
        case PaySpan.Monthly:
            newPayDate = Utils.AddMonthToDate(newPayDate);
            break;
        default:
            break;
    }
    return newPayDate;
}



export default LoanModel;