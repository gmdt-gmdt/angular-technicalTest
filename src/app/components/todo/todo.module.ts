import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CreateComponent } from './create/create.component';
import { TodoComponent } from './todo/todo.component';
import { ListComponent } from './list/list.component';
import { CoreModule } from '@app/core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@app/shared/shared.module';

const components = [
    CreateComponent,
    TodoComponent,
    ListComponent
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
    ...components,
  ],
})
export class TodoModule { }
