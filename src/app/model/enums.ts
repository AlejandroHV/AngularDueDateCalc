export enum WeekendDays
{
    Saturday = 6,
    Sunday = 0
}

export enum PaySpan {
    Weekly = 0,
    BiWeekly = 1,
    Monthly = 2

}

export enum CalculationState {
    INITIAL,
    DEPOSIT,
    WEEKEND,
    HOLIDAY,
    LOOPTYPE,
    FINAL,
    COMPLETE

}

export enum LoopType {
    Forward = 0,
    Reverse = 1

}