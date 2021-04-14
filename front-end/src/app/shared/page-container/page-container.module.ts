import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedMaterialModule} from '../shared-material/shared-material.module';
import { PageContainerComponent } from './page-container/page-container.component';



@NgModule({
  declarations: [
    PageContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedMaterialModule
  ],
  exports: [
    PageContainerComponent
  ]
})
export class PageContainerModule { }
