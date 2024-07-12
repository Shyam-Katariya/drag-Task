import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgbModule],
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashbordComponent implements OnInit {

  taskGroup: FormGroup = new FormGroup<any>({
    taskList: new FormArray<any>([
      new FormGroup({
        id: new FormControl('1'),
        name: new FormControl('task 1'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('todo')
      }),
      new FormGroup({
        id: new FormControl('2'),
        name: new FormControl('task 2'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('todo')
      }),
      new FormGroup({
        id: new FormControl('3'),
        name: new FormControl('task 3'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('todo')
      }),
      new FormGroup({
        id: new FormControl('4'),
        name: new FormControl('task 4'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('todo')
      }),
      new FormGroup({
        id: new FormControl('4'),
        name: new FormControl('task 4'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('todo')
      }),
      new FormGroup({
        id: new FormControl('5'),
        name: new FormControl('task 5'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('todo')
      }),
      new FormGroup({
        id: new FormControl('6'),
        name: new FormControl('task 6'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('todo')
      }),
      new FormGroup({
        id: new FormControl('7'),
        name: new FormControl('task 7'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('todo')
      }),
      new FormGroup({
        id: new FormControl('8'),
        name: new FormControl('task 8'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('todo')
      }),
      new FormGroup({
        id: new FormControl('9'),
        name: new FormControl('task 9'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('todo')
      }),
      new FormGroup({
        id: new FormControl('10'),
        name: new FormControl('task 10'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('todo')
      }),
      new FormGroup({
        id: new FormControl('11'),
        name: new FormControl('task 11'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('progress')
      }),
      new FormGroup({
        id: new FormControl('12'),
        name: new FormControl('task 12'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('progress')
      }),
      new FormGroup({
        id: new FormControl('13'),
        name: new FormControl('task 13'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('progress')
      }),
      new FormGroup({
        id: new FormControl('14'),
        name: new FormControl('task 14'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('progress')
      }),
      new FormGroup({
        id: new FormControl('15'),
        name: new FormControl('task 15'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('progress')
      }),
      new FormGroup({
        id: new FormControl('16'),
        name: new FormControl('task 16'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('progress')
      }),
      new FormGroup({
        id: new FormControl('17'),
        name: new FormControl('task 17'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('progress')
      }),
      new FormGroup({
        id: new FormControl('18'),
        name: new FormControl('task 18'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('progress')
      }),
      new FormGroup({
        id: new FormControl('19'),
        name: new FormControl('task 18'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('progress')
      }),
      new FormGroup({
        id: new FormControl('20'),
        name: new FormControl('task 18'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('progress')
      }),

      new FormGroup({
        id: new FormControl('21'),
        name: new FormControl('task 21'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('completed')
      }),
      new FormGroup({
        id: new FormControl('22'),
        name: new FormControl('task 22'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('completed')
      }),
      new FormGroup({
        id: new FormControl('23'),
        name: new FormControl('task 23'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('completed')
      }),
      new FormGroup({
        id: new FormControl('24'),
        name: new FormControl('task 24'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('completed')
      }),
      new FormGroup({
        id: new FormControl('25'),
        name: new FormControl('task 25'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('completed')
      }),
      new FormGroup({
        id: new FormControl('26'),
        name: new FormControl('task 26'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('completed')
      }),
      new FormGroup({
        id: new FormControl('27'),
        name: new FormControl('task 27'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('completed')
      }),
      new FormGroup({
        id: new FormControl('28'),
        name: new FormControl('task 28'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('completed')
      }),
      new FormGroup({
        id: new FormControl('29'),
        name: new FormControl('task 29'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('completed')
      }),
      new FormGroup({
        id: new FormControl('30'),
        name: new FormControl('task 30'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('completed')
      }),
      new FormGroup({
        id: new FormControl('31'),
        name: new FormControl('task 31'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('review')
      }),
      new FormGroup({
        id: new FormControl('32'),
        name: new FormControl('task 32'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('review')
      }),
      new FormGroup({
        id: new FormControl('33'),
        name: new FormControl('task 33'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('review')
      }),
      new FormGroup({
        id: new FormControl('34'),
        name: new FormControl('task 34'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('review')
      }),
      new FormGroup({
        id: new FormControl('35'),
        name: new FormControl('task 35'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('review')
      }),
      new FormGroup({
        id: new FormControl('36'),
        name: new FormControl('task 36'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('review')
      }),
      new FormGroup({
        id: new FormControl('37'),
        name: new FormControl('task 37'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('review')
      }),
      new FormGroup({
        id: new FormControl('38'),
        name: new FormControl('task 38'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('review')
      }),
      new FormGroup({
        id: new FormControl('39'),
        name: new FormControl('task 39'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('review')
      }),
      new FormGroup({
        id: new FormControl('40'),
        name: new FormControl('task 40'),
        detail: new FormControl('asdasdhasdadasdad'),
        state: new FormControl('review')
      }),
    ])
  })

  items: any[] = []
  tempArray: any[] = []

  tempObject: any = {}
  dragStartIndex = 0;
  dragEndIndex = 0;
  dragStartName: string = ''

  // private modelService:NgbModal
  constructor(private cdr: ChangeDetectorRef, private service: NgbModal) { }

  ngOnInit(): void {
    this.tempArray = this.taskGroup.get('taskList')?.value;
    this.items = this.tempArray
  }

  dragStart(event: any, index: number, id: any, name: string) {
    this.tempObject = {}
    this.dragStartIndex = 0;
    this.tempObject = this.items[index];
    this.dragStartName = name
    this.dragStartIndex = index;
    this.cdr.markForCheck();
  }

  dragEnd(event: any, name: string) {
    event.preventDefault();
    this.tempObject.state = name
    if (this.dragStartName == name) {
      this.reorderItems(this.dragStartIndex, this.dragEndIndex);
    }
    this.cdr.markForCheck();
  }

  reorderItems(fromIndex: number, toIndex: number) {
    const item = this.items[fromIndex];
    this.items.splice(fromIndex, 1);
    this.items.splice(toIndex, 0, item);
    this.cdr.markForCheck();
  }

  updateList(event: any, index: any, name: string) {
    event.preventDefault();
    this.dragEndIndex = 0;
    this.dragEndIndex = index;
  }

  addNewTask() {
    this.cdr.markForCheck();
    let task = this.service.open(NewTaskComponent, { size: 'lg', centered: true, scrollable: true });
    task.result.then((response: any) => {
      if (response) {
        this.items.push(response)
        this.cdr.markForCheck();
      }
    })
  }
}
