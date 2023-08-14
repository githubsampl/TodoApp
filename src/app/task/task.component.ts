import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  title:string = 'Todo';
  tasks:[string,boolean] [] = [];
  value:string="";
  updateValue:string ="";

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
 
    updateTask(oldTask:string){
      this.tasks = this.tasks.map((each)=>
      {
        if(each[0] === oldTask && each[1] === false){
          console.log("element",each[0],each[1])
          return [oldTask,true]
        }
       else if(each[0] === oldTask && each[1]=== true){
         return [this.updateValue,false]
       }
       else{
        return each
       }

        })
      }

}