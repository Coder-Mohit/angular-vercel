import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  task:string|undefined="";
  taskList:{id:number,task:string|undefined}[]=[];
  flag=true
  addTask(){
    this.taskList.push({id:this.taskList.length+1,task:this.task})
    this.task="";
  }

  deleteTask(id:number){
   this.taskList = this.taskList.filter(el=>el.id!=id);
  }

  editingId:number|null = null;

  editTask(id:number,inputTask:HTMLElement){
    this.task = this.taskList.find(el=>el.id==id)?.task;
    inputTask.focus()
    this.flag=false;
    this.editingId = id;
  }

  editTaskFinal(id: number) {
    if (this.editingId !== null) {
      const taskObj = this.taskList.find(el => el.id === id);
      if (taskObj) {
        taskObj.task = this.task; 
      }
      this.flag = true;
      this.editingId = null;
      this.task = ''; 
    }
  }
  
  
}
