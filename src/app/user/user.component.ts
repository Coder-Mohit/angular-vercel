import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  constructor(private route:ActivatedRoute){

  }
  name:null|string = '';
  // ngOnInit(){
  //   this.route.params.subscribe((params)=>{
  //     console.log(params);
  //     this.name = params['name']
  //   })
  // }

  //passing data parent to child example app to user comp.

  @Input() user:string='';
  @Input() city:string='';


  //pass data child to parent

  @Output() getUsers = new EventEmitter;
  users = ['one','two','three','four','five'];

  // ngOnInit(){
  //   this.getUsers.emit(this.users)
  // }

  loadData(){
    this.getUsers.emit(this.users)
  }

}
