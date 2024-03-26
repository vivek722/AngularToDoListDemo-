import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoaddComponent } from './todoadd.component';

describe('TodoaddComponent', () => {
  let component: TodoaddComponent;
  let fixture: ComponentFixture<TodoaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoaddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
