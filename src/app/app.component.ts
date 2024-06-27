import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo-list';
  tasks: string[] = [];
  newTask: string = '';

  constructor() {
    this.getTasks();
  }

  saveTask() {
    // Input validation
    this.newTask = this.newTask.trim();
    if (this.newTask == '') return;

    // Add new task to local storage
    this.getTasks();
    this.tasks.push(this.newTask);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.newTask = '';
  }

  // Gets tasks from local storage; creates an empty array if 'tasks' key doesn't exist yet
  getTasks() {
    this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  }

  // Get all tasks, remove the task, then save the modified array in local storage
  removeTask(index: number) {
    this.getTasks();
    if (index > -1) {
      this.tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

  clearAllTasks() {
    localStorage.clear();
    this.getTasks();
  }
}
