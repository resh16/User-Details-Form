import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';

  employeeList : any = [];

  onAdd(value : any)
  {
    this.employeeList.push
    ({
      firstName : value.firstName,
      lastName : value.lastName,
      email : value.email,
      phnNo : value.phnNo,
      address : value.address,
      country : value.country,
      state : value.state
    })
  }
}
