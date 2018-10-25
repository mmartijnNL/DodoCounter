import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'login',
  component: LogInComponent
}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LogInComponent]
})
export class LogInModule { }
