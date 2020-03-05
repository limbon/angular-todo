import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

export interface Todo {
	id?: string;
	name: string;
	description: string;
	complete: boolean;
	date?: Date | string;
}

@Injectable({
	providedIn: 'root'
})
export class TodoService {
	private todos: Todo[] = [];

	constructor() {
		this.setTodoFromLocalStorage();
	}

	addTodo(todo: Todo) {
		todo.id = uuid();
		todo.date = new Date().toISOString();
		this.todos.push(todo);
		localStorage.setItem('todos', JSON.stringify(this.todos));
	}

	removeTodo(id: string) {
		this.todos = this.todos.filter((t) => t.id !== id);
		localStorage.setItem('todos', JSON.stringify(this.todos));
	}

	updateStatus(id: string, status: boolean) {
		this.todos.filter((t) => t.id === id)[0].complete = status;
		localStorage.setItem('todos', JSON.stringify(this.todos));
	}

	getTodos() {
		return this.todos;
	}

	private setTodoFromLocalStorage() {
		if (localStorage.getItem('todos')) {
			this.todos = JSON.parse(localStorage.getItem('todos'));
		} else {
			this.todos = [];
			localStorage.setItem('todos', JSON.stringify(this.todos));
		}
	}
}
