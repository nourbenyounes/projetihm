import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  private apiUrl = 'http://localhost:3000/api/cours';

  constructor(private http: HttpClient) {}

  getCours(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
