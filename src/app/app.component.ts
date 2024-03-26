import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TODOSComponent}from "./AngulerDemo/todos/todos.component"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppComponent,TODOSComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularDemo';

  // constructor(){
  //   setTimeout(() => {
  //     this.title = 'Angular';
  //   }, 2000);
  // }
}
