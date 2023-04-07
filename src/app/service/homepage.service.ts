import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor(private http:HttpClient) { }

postUser( url:string ,data:any)
{
  return this.http.post(url,data);
}

EditUser(url:string){
  return this.http.get(url)
}

}
