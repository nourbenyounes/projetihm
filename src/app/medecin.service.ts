// src/app/medecin.service.ts
/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MedecinService {
  private apiUrl = 'http://localhost:3000/api/medecins';

  constructor(private http: HttpClient) {}

  getMedecins(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getMedecinById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }
}*/
// medecin.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Medecin } from './medecin.model';
const apiUrl = 'http://localhost:3000/api/medecins';

@Injectable({
  providedIn: 'root',
})
export class MedecinService {

  constructor(private http: HttpClient) {}

  getMedecins(): Observable<Medecin[]> {
    return this.http.get<Medecin[]>(apiUrl);
  }

  create(data: any): Observable<any> {
    return this.http.post(apiUrl, data)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('HTTP Error:', error);
          return throwError(error);
        })
      );
  }

  getMedecinById(id: string): Observable<Medecin> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Medecin>(url);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${apiUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${apiUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(apiUrl);
  }


}

