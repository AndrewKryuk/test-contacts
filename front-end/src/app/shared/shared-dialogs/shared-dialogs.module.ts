import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SharedMaterialModule} from '../shared-material/shared-material.module';
import { SharedDialogsBoolComponent } from './shared-dialogs-bool/shared-dialogs-bool.component';



@NgModule({
  declarations: [
    SharedDialogsBoolComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    FormsModule,
  ],
})
export class SharedDialogsModule { }
