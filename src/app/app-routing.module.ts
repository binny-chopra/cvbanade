import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterCvInfoComponent } from './feature-modules/enter-cv-info/enter-cv-info.component';
import { ErrorComponent } from './feature-modules/error/error.component';
import { HomepageComponent } from './feature-modules/homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'signup', component: EnterCvInfoComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
