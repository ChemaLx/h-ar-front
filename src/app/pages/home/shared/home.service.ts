import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(private readonly _httpClient: HttpClient) { }

  recuperarLugares(): Observable<HttpResponse<any>> {
   let httpParams = new HttpParams()
  
     return this._httpClient.get(`http://localhost:3000/lugares/all`,
       {
         headers: this.httpHeaders,
         observe: 'response',
         params: httpParams
       })
  
     }
}



