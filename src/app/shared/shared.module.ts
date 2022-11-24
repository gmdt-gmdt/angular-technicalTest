import { StatusPipe } from './pipes/status.pipe';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        StatusPipe
    ],
    exports: [
        StatusPipe
    ],
})
export class SharedModule { }
