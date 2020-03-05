import { Component, OnInit, OnChanges } from '@angular/core';
import { TodoService, Todo } from './todo.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
	filter: string = '';

	get todos(): Todo[] {
		if (this.filter.length) {
			return this.todoService.getFilteredTodos(this.filter);
		} else {
			return this.todoService.getTodos();
		}
	}

	constructor(private todoService: TodoService) {}

	ngOnInit() {}
}
