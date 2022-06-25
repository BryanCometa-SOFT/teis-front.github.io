import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//Components
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'home', component: HomeComponent },
      { path: '', component: InformationComponent },
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

