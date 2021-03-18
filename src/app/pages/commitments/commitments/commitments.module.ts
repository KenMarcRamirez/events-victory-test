import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommitmentsRoutingModule } from './commitments-routing.module';
import { CommitmentsComponent } from './commitments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [CommitmentsComponent],
  imports: [
    CommonModule,
    CommitmentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
  ]
})
export class CommitmentsModule { }
