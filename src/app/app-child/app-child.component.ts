import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.css']
})
export class AppChildComponent implements OnInit {

@Input() value;
@Output() eventClick = new EventEmitter();


selectedVehicle:Vehicle;
  constructor() { }

 handleClickMe(){
  console.log("click handle works")

  this.eventClick.emit("Subaru");
}
  ngOnInit() {
  }

}

class Vehicle {


}
