//Modules
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//Services
import { TeisService } from './../services/teis.service';

//Components
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';

//Routing
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    InformationComponent
  ],
  imports: [
    PagesRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [TeisService]
})
export class PagesModule { }
