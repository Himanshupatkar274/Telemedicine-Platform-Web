import { NgModule } from "@angular/core";
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const MODULE = [
    IonicModule, 
    CommonModule,
    FormsModule
]
@NgModule({
    imports: [MODULE],
    exports: [MODULE],
    declarations: []
})

export class SharedModule {}