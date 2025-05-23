import { afterNextRender, afterRender, Component, computed, effect, signal, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { profileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import {
  CommonModule,
  NgFor,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
} from '@angular/common';
import { RoutesComponent } from './routes/routes.component';
import { FormComponent } from './form/form.component';
import { UserComponent } from './user/user.component';
import { PipeComponent } from './pipe/pipe.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { ServiceComponent } from './service/service.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    LoginComponent,
    profileComponent,
    FormsModule,
    TodoListComponent,
    NgIf,
    NgFor,
    NgSwitchDefault,
    NgSwitch,
    NgSwitchCase,
    RoutesComponent,
    FormComponent,
    UserComponent,
    PipeComponent,
    LifeCycleComponent,
    ServiceComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: number | string | boolean = 'Mohit Rathor';
  name = '';
  displayName = '';
  global_var: any = 10;
  count = 0;

  handleClick() {
    this.title = true;
    console.log('function called');
    this.global_var = [1, 2, 3];
  }

  sum(a: number, b: number) {
    console.log(a + b);
  }

  handleIncrement() {
    this.count += 1;
  }

  handleDecrement() {
    this.count -= 1;
  }

  handleReset() {
    this.count = 0;
  }

  handleEvent(event: Event) {
    // console.log((event.target as HTMLInputElement).value);
    console.log('event type ', event.type);
    // console.log((event.target as Element).className);
  }

  getName(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  showName(event: Event) {
    this.displayName = this.name;
  }

  email = '';
  getEmail(val: string) {
    console.log(val);
    this.email = val;
  }

  setEmail() {
    this.email = 'default@test.com';
  }

  display = false;
  toggleDiv() {
    this.display = !this.display;
  }

  color = '';
  handleColor(val: string) {
    this.color = val;
  }

  users = ['mohit', 'anil', 'sam', 'dhoni'];
  students = [
    { name: 'remo', age: 28, email: 'remo@test.com' },
    { name: 'Mohit', age: 23, email: 'mohit@test.com' },
    { name: 'Sam', age: 24, email: 'sam@test.com' },
  ];

  getNam(val: string) {
    console.log(val);
  }

  //signal
  counter = signal(10);
  constructor() {
    effect(() => {
      // console.log(this.counter());
      // console.log(this.data()); 
    });

    // afterRender(()=>{
    //   console.log("after render",this.Count);
    // })

    // afterNextRender(()=>{
    //   console.log("after next render",this.Count);
      
    // })

  }

  data = signal<string | number>(10);

  updateSignal() {
    this.data.set('Hello');
  }

  x = signal(10);
  y = signal(20);
  z = computed(() => this.x() + this.y());
  showValue() {
    console.log(this.z());
    this.x.set(50);
    console.log(this.z());
  }

  fruits = ['apple', 'mango', 'orange']; //for loop contextual variables example

  //two way binding example

  username = '';

  //dynamic style

  zoom = false;
  bgColor = 'red';
  fontSize = '30';
  headingSizeBig = '80px';
  headingSizeSmall = '30px';
  h3fontSize = 30;
  toggleFontSize() {
    this.h3fontSize += 1;
  }

  //directive example
  show = false;

  //*ngIf example
  login = true;

  //*ngSwitch example
  clr = 'dsa';

  changeColor(color: string) {
    this.clr = color;
  }

  //dynamic data pass parent to child
  userName = ''
  city='delhi'
  onUserChange(user:string){
    this.userName=user
  }

  //data pass child to parent

  records:undefined|string[];

  handleUsers(users:string[]){
    this.records = users;
  }

  //life cycle methods

  Count = 0; 
  increment() {
    this.Count += 1;
  }

  // ditect changes in parent component
  @ViewChild('lifeCycle')  LifeCycleComponent:any



}
