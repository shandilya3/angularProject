import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  vehicleName = 'Honda Civic 2014 EX!';

handleEventClicked(data) {
  console.log('received data is ' + data);
}
}

