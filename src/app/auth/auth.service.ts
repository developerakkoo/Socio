import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
   token:any;
  constructor(private http: HttpClient) {
    this.token=localStorage.getItem('tokan')
   }
  /*  Login Api */
  loginApi(data:any){
  return this.http.post(`${environment.apiBaseUrl}${environment.apiPath}login`, data).pipe(map(res => <any>res));
  }

  forgotPassword(formData: any) {
		let headers = new HttpHeaders({
			'Content-Type': 'application/json'
		});
		return this.http.post(`${environment.apiBaseUrl}${environment.apiPath}forgetPassword`,formData).pipe(map(res => <any>res));
  }
  registerSubAdmin(data:any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return  this.http.post(`${environment.apiBaseUrl}${environment.apiPath}registerSubAdmin`, data).pipe(map(res => <any>res));
  }


}
