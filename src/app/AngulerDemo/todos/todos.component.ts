import { Component,OnInit ,Inject  } from '@angular/core';
import { CommonModule,DOCUMENT  } from '@angular/common'
import {TodoItemComponent } from '../todo-item/todo-item.component';
import{todo}from "../../todo"
import{ TodoaddComponent } from '../todoadd/todoadd.component'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TODOSComponent,CommonModule,TodoItemComponent,TodoaddComponent,FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TODOSComponent implements OnInit {
  localitem : string
  TODOData:todo[];
  deletetodo: any;

  constructor(@Inject(DOCUMENT) private document: Document){
    this.localitem =JSON.parse(localStorage.getItem('currentUser')!);
    if(this.localitem != null)
    {
       this.TODOData= JSON.parse(this.localitem);
    }
    else
    {
      this.TODOData=[];
    }
  }
  ngOnInit(): void {

  }
  deletedata(todo:todo){
     console.log("delete data", todo);
     const index = this.TODOData.indexOf(todo)
     this.TODOData.splice(index,1);
     localStorage.setItem("todoData",JSON.stringify(this.TODOData))
  }
  addtododata(todo:todo){
    console.log("add data", todo);
    this.TODOData.push(todo);
    localStorage.setItem("todoData",JSON.stringify(this.TODOData))
 }
}
  