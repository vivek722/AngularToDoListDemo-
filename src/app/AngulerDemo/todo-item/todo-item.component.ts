import { Component,Input,Output,EventEmitter } from '@angular/core';
import { todo } from '../../todo';
 

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo:todo;
  @Output() tododelete : EventEmitter<todo> = new EventEmitter();
  onclick(todo:todo) {
    this.tododelete.emit(todo)
    console.log("onclick has been trigged")
  }
}
