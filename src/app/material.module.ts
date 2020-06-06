import { NgModule } from '@angular/core';

/* https://material.angular.io/components/categories */
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [MatBadgeModule, MatButtonModule],
  exports: [MatBadgeModule, MatButtonModule]
})

export class MaterialModule{}
