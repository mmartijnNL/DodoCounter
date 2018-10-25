import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntriesComponent } from './entries.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'entries',
  component: EntriesComponent
}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EntriesComponent]
})
export class EntriesModule { }
