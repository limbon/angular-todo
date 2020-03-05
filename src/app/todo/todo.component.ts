import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo.service';

@Component({
	selector: 'app-todo',
	templateUrl: './todo.component.html',
	styleUrls: [ './todo.component.scss' ]
})
export class TodoComponent implements OnInit, Todo {
	@Input() name: string;
	@Input() description: string;
	@Input() date: string;
	@Input() complete: boolean;
	@Input() id: string;

	constructor() {}

	ngOnInit(): void {
		this.date = new Date(this.date).toLocaleString();
	}
}
