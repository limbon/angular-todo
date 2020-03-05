import { Component, OnInit, Input } from '@angular/core';
import { Todo, TodoService } from '../todo.service';
import { faTrash, faEdit, faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';

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

	editState: boolean = false;
	icons = {
		faCheck,
		faEdit,
		faTrash,
		faPlus
	};

	constructor(private todoService: TodoService) {}

	ngOnInit(): void {
		this.date = new Date(this.date).toLocaleString();
	}

	remove() {
		this.todoService.removeTodo(this.id);
	}

	updateStatus() {
		this.todoService.updateStatus(this.id, !this.complete);
	}

	toggleEditState() {
		if (this.editState) {
			this.todoService.updateTodo(this.id, {
				name: this.name,
				description: this.description,
				complete: this.complete
			});
		}
		this.editState = !this.editState;
	}
}
