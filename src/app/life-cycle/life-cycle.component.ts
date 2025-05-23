import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css'
})
export class LifeCycleComponent {
  @Input() counter:number=0;
  // constructor(){
  //   console.log("constructor");
  // }

  // ngOnInit(){
  //   console.log("initialization");
  // }

  // ngOnDestroy(){
  //   console.log("Destroy");
  // }

  // ngOnChanges(){
  //   console.log("ngOnChange");
  // }
}
