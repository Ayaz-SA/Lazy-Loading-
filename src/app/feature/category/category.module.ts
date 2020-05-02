import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRoutingModule } from './category-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddCategoryComponent } from './add-category/add-category.component';

@NgModule({
  declarations: [AddCategoryComponent],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
