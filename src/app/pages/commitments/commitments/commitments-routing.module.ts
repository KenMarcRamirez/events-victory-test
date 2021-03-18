import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommitmentsComponent } from './commitments.component';

const routes: Routes = [{ path: '', component: CommitmentsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommitmentsRoutingModule { }
