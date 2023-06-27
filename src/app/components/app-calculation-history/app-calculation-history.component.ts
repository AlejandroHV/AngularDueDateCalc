import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ICalculationHistory } from 'src/app/model/calculationHistoryModel';
import { PaySpan } from 'src/app/model/enums';

@Component({
  selector: 'app-app-calculation-history',
  templateUrl: './app-calculation-history.component.html',
  styleUrls: ['./app-calculation-history.component.scss']
})
export class AppCalculationHistoryComponent implements OnChanges {

  @Input() data: ICalculationHistory[] | undefined;
  displayedColumns: string[] = ['dueDate','fundingDay',
    'payDay',
    'paySpan',
    'hasDirectDeposit',
    'holidays',
  ];

  ngOnInit() {
   
  }

  ngOnChanges(changes: SimpleChanges) {
   
  }

}
