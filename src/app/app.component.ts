import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teis-frontend';
  dataTable: string[] = ["id", "tensión", "presión", "velocidad", "estado bateria", "profundidad", "fecha creación"];
}
