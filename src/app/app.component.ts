import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
 /* TO DO: 
    • Improve styling. Implement the basic theme from Material. 
    • Improve user experience.
    • When calculating the due date by the span Weekly and BiWeekly the dates might fall outside the month.
    • The calculation is currently being done in a state machine way but it can be implemented as a recursive 
      function for the weekly and holidays part and also going back to the start of the process.
    • Improve the ussage of the Form Control. Dynamic fields, Validations, messages. 
    
 */
}
