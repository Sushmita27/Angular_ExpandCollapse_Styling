import { Component } from '@angular/core';
import { User } from './address-card/user.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User
  constructor() {
    this.user =new User();
    this.user.name="Sushmita Karmakar";
    this.user.title= "Software Developer";
    this.user.address= "21,Paikpara, Kolkata";
    this.user.phone=[
      "022345671234",
      "0223",
      "033254312345"
    ];

  }

}
