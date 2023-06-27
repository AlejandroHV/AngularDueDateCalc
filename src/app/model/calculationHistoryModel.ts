

export interface ICalculationHistory {
    fundingDay: string | undefined;
    payDay: string | undefined;
    paySpan: string | undefined;
    hasDirectDeposit: boolean | undefined;
    holidays: Date[] | undefined;
    dueDate: string | undefined;
}

export class CalculationHistory implements ICalculationHistory {
    fundingDay: string | undefined;
    payDay: string | undefined;
    paySpan: string | undefined;
    hasDirectDeposit: boolean | undefined;
    holidays: Date[] | undefined;
    dueDate: string | undefined;
    constructor(fundingDay: string,
        payDay: string,
        paySpan: string,
        hasDirectDeposit: boolean,
        holidays: Date[],
        dueDate: string) {
        this.fundingDay = fundingDay;
        this.payDay = payDay;
        this.dueDate = dueDate;
        this.hasDirectDeposit = hasDirectDeposit;
        this.holidays = holidays;
        this.paySpan = paySpan;

    }

}