import { ɵnormalizeQueryParams } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink,Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router:Router){}

  goToProfile(name:string){
    this.router.navigate(['profile'],{queryParams:{name}});
  }

  users = [
    {
      id:1,
      name:'john',
      age:24,
      email:'john@test.com'
    }, {
      id:2,
      name:'don',
      age:26,
      email:'don@test.com'
    }, {
      id:3,
      name:'peter',
      age:26,
      email:'peter@test.com'
    }, {
      id:4,
      name:'ronny',
      age:28,
      email:'ronny@test.com'
    },
  ]
}  
