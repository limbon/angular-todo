import { Component, OnInit } from '@angular/core';
import { TodoService, Todo } from './todo.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
	todos: Todo[] = [];
	constructor(private todoService: TodoService) {}

	ngOnInit() {
		this.todos = this.todoService.getTodos();
	}
}
