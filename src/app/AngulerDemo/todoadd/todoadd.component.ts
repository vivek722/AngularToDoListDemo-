import { Component,Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { todo } from '../../todo';

@Component({
  selector: 'app-todoadd',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todoadd.component.html',
  styleUrl: './todoadd.component.css'
})
export class TodoaddComponent {
 title:string;
 description:string;
 @Output() todoadd : EventEmitter<todo> = new EventEmitter();
 onSubmit(){
  const todo = {
    sno :2,
    title :this.title,
    description :this.description,
    active :true,
  }
  this.todoadd.emit(todo);
  console.log("add data",todo);
}

}
