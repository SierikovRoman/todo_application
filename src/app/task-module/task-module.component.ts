import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task';
import { TaskService } from '../services/task.service';

// Some JQuery ;)
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-task-module',
  templateUrl: './task-module.component.html',
  styleUrls: ['./task-module.component.scss'],
  providers: [TaskService]
})
export class TaskModuleComponent implements OnInit {

  constructor(
    private ts: TaskService
  ) { }

  tasks: any;
  length: number;
  all_id: any;
  edit_task: any = '';
  key: string = ' ';
  reverse: boolean = false;

  priority = [
    { name: 'success' },
    { name: 'warning' },
    { name: 'danger' },
  ];
  selectedPriority: string;

  // Get all tasks
  getTasks() {
    this.tasks = this.ts.getTasks();
    this.length = this.tasks.length;
  }

  // Remove task with specific id
  removeTask(id) {
    this.ts.removeTask(id);
    this.getTasks();
  }

  // Get max id from all tasks
  getMaxId() {
    const all_id = this.tasks.map(function(item) {
      return item.id;
    });
    const max = Math.max(...all_id);
    return max;
  }

  // Add new task
  addTask(title, body, priority) {
    const maxId = this.getMaxId();
    const newId = maxId + 1;
    const task: Task = {
      id: newId,
      title: title.value,
      body: body.value,
      priority: priority.value
    };
    this.ts.addTask(task);
    this.getTasks();
    $('#addTaskModal').modal('hide');
  }

  // Edit task with specific id
  editTask(id) {
    this.edit_task = this.ts.editTask(id);
  }

  // Save edited task
  saveTask(title, body, priority) {
    const editedtask: Task = {
      id: this.edit_task.id,
      title: title.value,
      body: body.value,
      priority: priority.value
    };
    this.ts.saveTask(editedtask);
    this.getTasks();
    $('#editTaskModal').modal('hide');
  }

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
    console.log(this.tasks);
  }


  ngOnInit() {
    this.getTasks();
  }

}
