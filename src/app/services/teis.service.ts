import { TeisTable } from './../interfaces/teis';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeisService {
  private ulr = "https://stark-woodland-57650.herokuapp.com/api";

  constructor(private http:HttpClient) { }

  getTeisData():Observable<TeisTable>{
    return this.http.get<TeisTable>(this.ulr + "/teis/datetable")
  }
}
