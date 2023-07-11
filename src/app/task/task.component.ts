import { Conditional } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  title:string = 'Todo';
  tasks:[string,boolean] [] = [];
  value:string=""

  addTask(){
    this.tasks.push([this.value,false]);
    this.value="";
}
removeTask(delString:string){
  this.tasks = this.tasks.filter(
    (task)=>{
      if(delString !== task[0]){
        return task;
      } 
    return
    });
}
 
    updateTask(taskChange:[string,boolean]){
      this.tasks = this.tasks.map((task)=>{
        if(task[0] === taskChange[0]){
          return [task[0],!task[1]]
        }
        return task
      })
    }

  }