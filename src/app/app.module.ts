import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoService } from './todo.service';
import { TodoComponent } from './todo/todo.component';

@NgModule({
	declarations: [ AppComponent, TodoComponent ],
	imports: [ BrowserModule ],
	providers: [ TodoService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
