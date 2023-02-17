import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  constructor(private http: HttpClient) {}

  getTitle1() {
    return this.http.get('api1/');
  }

  getTitle2() {
    return this.http.get('api2/');
  }
}
