import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
	selector: 'app-todo-form',
	templateUrl: './todo-form.component.html',
	styleUrls: [ './todo-form.component.scss' ]
})
export class TodoFormComponent implements OnInit {
	name = '';
	description = '';

	constructor(private todoService: TodoService) {}

	ngOnInit(): void {}

	addTodo() {
		if (this.name) {
			this.todoService.addTodo({ name: this.name, description: this.description, complete: false });
		}
	}
}
