import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { tasksComponent } from './tasks/tasks.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule ({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule, HeaderComponent, UserComponent, tasksComponent]
})
export class AppModule {}