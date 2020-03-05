import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoService } from './todo.service';
import { TodoComponent } from './todo/todo.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
	declarations: [ AppComponent, TodoComponent, TodoFormComponent ],
	imports: [ BrowserModule, FormsModule, FontAwesomeModule ],
	providers: [ TodoService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
