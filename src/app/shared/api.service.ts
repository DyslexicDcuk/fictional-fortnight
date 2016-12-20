import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';

@Injectable()
export class ApiService {

  private apiUrl;

  constructor(
    private http: Http
  ) {
    this.apiUrl = 'http://localhost:3000';
  }

  find() {
    return this.http.get(`${this.apiUrl}/links`)
      .map((res) => res.json());
  }

  create(data) {
    return this.http.post(`${this.apiUrl}/links`, data)
      .map((res) => res.json());
  }

  update(id, data) {
    return this.http.put(`${this.apiUrl}/links/${id}`, data)
      .map((res) => res.json());
  }

}
