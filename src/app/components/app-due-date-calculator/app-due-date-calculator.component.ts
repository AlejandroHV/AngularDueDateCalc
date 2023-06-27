import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import LoanModel from 'src/app/model/LoanModel';
import { PaySpan } from 'src/app/model/enums';

interface IPaymentSpans {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-app-due-date-calculator',
  templateUrl: './app-due-date-calculator.component.html',
  styleUrls: ['./app-due-date-calculator.component.scss']
})
export class AppDueDateCalculatorComponent {

  public title = 'Next Due Date Calculation';
  public fundDay: Date = new Date();
  public holidays: Date[] = [];
  public paySpan: number = 0;
  public payDay: Date  = new Date();
  public hasDirectDeposit: boolean = false;

  public nextDueDate: string | undefined;
  public dueDateForm: FormGroup = new FormGroup('');

  paymentSpans : IPaymentSpans[] = [
    { value: PaySpan.BiWeekly , viewValue: "BiWeekly"},
    { value: PaySpan.Monthly , viewValue: "Monthly"},
    { value: PaySpan.Weekly , viewValue: "Weekly"},
   ];

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.dueDateForm = new FormGroup({
      fundDate: new FormControl('', Validators.required),
      holidays: new FormControl(this.holidays),
      paySpan: new FormControl('', Validators.required),
      payDay: new FormControl('', Validators.required),
      hasDirecDeposit: new FormControl(''),
    });
  }

  public onHolidayInput(holiday: string) {
    
    this.holidays?.push(new Date(holiday));
  }

  removeHoliday(date:Date){
   
    this.holidays= this.holidays.filter(x=> x !== date);
  }

  public onSubmit = () => {

    if(this.dueDateForm.invalid){
      return;
    }
    
    this.fundDay= this.dueDateForm.controls["fundDate"].value;
    this.paySpan= this.dueDateForm.controls["paySpan"].value;
    this.payDay= this.dueDateForm.controls["payDay"].value;
    this.hasDirectDeposit= this.dueDateForm.controls["hasDirecDeposit"].value;


    const loan = new LoanModel();
    this.nextDueDate = loan.calculate(
      new Date(this.fundDay!),
      this.holidays!,
      this.paySpan!,
      this.payDay!,
      this.hasDirectDeposit!).toDateString();
  }
}

