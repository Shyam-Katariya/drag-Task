import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit{

  allState:any = ['todo','progress','completed','review','bug']

  newTaskForm: FormGroup = new FormGroup({
    taskId: new FormControl('', [Validators.required]),
    taskName: new FormControl('', [Validators.required]),
    taskDescription: new FormControl('', [Validators.required]),
    selectTaskState: new FormControl('',[Validators.required])
  })

  constructor(private model:NgbActiveModal) { }
  
  ngOnInit(): void {
    console.log('model');
  }

  onSubmit() { 

    if (this.newTaskForm.valid) {
      console.log(this.newTaskForm.value);
      const obj = {
        id: this.newTaskForm.value.taskId,
        name: this.newTaskForm.value.taskName,
        detail: this.newTaskForm.value.taskDescription,
        state: this.newTaskForm.value.selectTaskState
      }
      this.model.close(obj)
    }
  }
  
  gotoDashboard() { 
    this.model.close(false)
  }

}
