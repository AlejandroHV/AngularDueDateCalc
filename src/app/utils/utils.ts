import { WeekendDays } from '../model/enums';


export function AddMonthToDate(date: Date): Date {

    let nextMonthDate = new Date(date);
    let nextMonth = date.getMonth() + 1;
    nextMonthDate.setMonth(date.getMonth() + 1);
    // As there are some month with different days some dates might fall on those days so I check if it goes to far. 
    nextMonthDate = validateDateFallIntoMonth(nextMonthDate, nextMonth);

    return nextMonthDate;
}

export function validateDateFallIntoMonth(date: Date, validMonth: number) {
    let newDate = new Date(date);
    if (date.getMonth() > validMonth) {
        newDate.setDate(newDate.getDate() - 1);
        newDate = validateDateFallIntoMonth(newDate, validMonth);
    }
    return newDate;
}

export function datefallsOnDates(date: Date, dates: Date[] | undefined): boolean {
    if (dates) {
        return (dates.some(d => d.getTime() === date.getTime()));
    }
    return false;
}

export function isWeekend(date: Date) {
    return (date.getDay() === WeekendDays.Saturday || date.getDay() === WeekendDays.Sunday);
}

