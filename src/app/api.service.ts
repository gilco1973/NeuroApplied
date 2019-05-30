import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  server_url = '/technician/';
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Promise<any> {
    const data = { email: email, password: password };
    return this.http.post(this.server_url + 'login', data).toPromise();
  }
  logout(email: string, password: string): Promise<any> {
    const data = { };
    return this.http.post(this.server_url + 'logout', data).toPromise();
  }
}
