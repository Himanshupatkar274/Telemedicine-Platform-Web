import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const MODULE = [
    CommonModule,
    FormsModule
]
@NgModule({
    imports: [MODULE],
    exports: [MODULE],
    declarations: []
})

export class SharedModule {}