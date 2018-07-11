import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyloadComponent } from './lazyload/lazyload.component';
import { RouterModule } from '@angular/router';
import { LAZY_ROUTE } from './lazy.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LAZY_ROUTE)
  ],
  declarations: [LazyloadComponent]
})
export class LazyModule { }
