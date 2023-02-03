import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  inputTodo: string = '';

  constructor() {}
  ngOnInit(): void {
    this.todos = [
      {
        content: 'Fiirst todo',
        completed: false,
      },
      {
        content: 'Second todo',
        completed: true,
      },
    ];

    throw new Error('Method not implemented.');
  }

  toggleDone(id: number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i != id);
  }

  addTodos() {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });

    this.inputTodo = '';
  }
}
