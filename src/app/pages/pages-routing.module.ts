import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//Components
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomeComponent },
      { path: 'table', component: InformationComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PagesRoutingModule { }

