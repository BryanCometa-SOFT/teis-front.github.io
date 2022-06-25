import { TeisTable } from './../interfaces/teis';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeisService {
  private ulr = "http://127.0.0.1:8000/api";

  constructor(private http:HttpClient) { }

  getTeisData():Observable<TeisTable>{
    return this.http.get<TeisTable>(this.ulr + "/teis/datetable")
  }
}
