import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SocialLogin } from './common/social-login.enum';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  server_url = '/technician/';
  constructor(private http: HttpClient) { }
  loginWithPassword(email: any, password: any) {
    //const data = { email: email, password: password };
    return this.http.get(this.server_url + `login?email=${email}&password=${password}`).toPromise();
  }
  logout(email: string, password: string): Promise<any> {
    const data = {};
    return this.http.post(this.server_url + 'logout', data).toPromise();
  }
  loginWithSocial(type: string, data: any): Promise<any> {
    return this.http.get(`/login/${type}?code=${data}`).toPromise();
  }
}
