import { Component, OnInit } from '@angular/core';
import { TeisService } from 'src/app/services/teis.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  dataBodyTable: any;
  headTable: string[] = ["id", "tensión", "presión", "velocidad", "estado bateria", "profundidad", "fecha creación"];
  constructor(private teis: TeisService) { }

  ngOnInit(): void {
    this.getDataTable();
  }

  getDataTable() {
    this.teis.getTeisData().subscribe(resp => {
      console.log(resp);
      this.dataBodyTable = resp;
    });
  }

}
