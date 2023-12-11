import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActividadesDiarias } from '../models/ActividadesDiarias.models';


@Injectable({
  providedIn: 'root'
})
export class ActividadesDiariasService {

  private baseURL = `http://localhost:3000/api`

  constructor(private http: HttpClient) { }


  getAllData() {
    return this.http.get<ActividadesDiarias[] >(`${this.baseURL}/ActividadesDiarias`)
  }
  postData(ActividadesDiarias: ActividadesDiarias): Observable<any> {
    return this.http.post<ActividadesDiarias>(`${this.baseURL}/ActividadesDiarias`, ActividadesDiarias)
  }
  updateData(ActividadesDiarias: ActividadesDiarias): Observable<any> {
    return this.http.put<ActividadesDiarias>(`${this.baseURL}/ActividadesDiarias/${ActividadesDiarias.id}`, ActividadesDiarias)
  }
  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/ActividadesDiarias/${id}`)
}
}