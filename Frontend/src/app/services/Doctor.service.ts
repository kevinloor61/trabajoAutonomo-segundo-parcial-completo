import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from '../models/Doctor.models';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseURL = `http://localhost:3000/api`

  constructor(private http: HttpClient) { }


  getAllData() {
    return this.http.get<Doctor[] >(`${this.baseURL}/Doctor`)
  }
  postData(Doctor: Doctor): Observable<any> {
    return this.http.post<Doctor>(`${this.baseURL}/Doctor`, Doctor)
  }
  updateData(Doctor: Doctor): Observable<any> {
    return this.http.put<Doctor>(`${this.baseURL}/Doctor/${Doctor.id}`, Doctor)
  }
  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/Doctor/${id}`)
}
}