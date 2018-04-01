import { Injectable } from '@angular/core';
import { Task } from '../shared/task';
import { TASKS } from '../shared/TASKS';

@Injectable()
export class TaskService {

  getTasks() {
    return TASKS;
  }

  removeTask(i) {
    TASKS.splice(i, 1);
  }

  addTask(task: Task) {
    TASKS.push(task);
  }

  editTask(id: number) {
    for (let i = 0; i < TASKS.length; i++) {
      if (TASKS[i].id === id) {
          return TASKS[i];
      }
    }
  }

  saveTask(editedtask: Task) {
    const newTask = this.editTask(editedtask.id);
    newTask.title = editedtask.title;
    newTask.body = editedtask.body;
    newTask.priority = editedtask.priority;

    return newTask;
  }

}
