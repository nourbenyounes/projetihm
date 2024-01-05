// medecin-edit.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MedecinEditService {
  private apiUrl = 'http://localhost:3000/api/medecins';

  constructor(private http: HttpClient) {}

  getMedecin(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  updateMedecin(id: string, medecinData: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, medecinData);
  }
}
