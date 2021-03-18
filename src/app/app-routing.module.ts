import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  { path: 'commitments', loadChildren: () => import('./pages/commitments/commitments/commitments.module').then(m => m.CommitmentsModule) },
  { path: 'question', loadChildren: () => import('./pages/question/question/question.module').then(m => m.QuestionModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
