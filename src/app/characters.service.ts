import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, Http } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class CharactersService {

  private url = "http://localhost:3000/api/";
  private apikey = "3739af56c65dfe38d26d021b7b29a136";

  constructor(private http: HttpClient) { }

 getAll():Promise<any> {
   return this.http.get(this.url+"marvel/characters/mock?apikey="+this.apikey)
     .toPromise()
     .catch(this.handleError)
 }

 getProfile():Promise<any> {
   return this.http.get(this.url+"marvel/character/profile?apikey="+this.apikey)
     .toPromise()
     .catch(this.handleError)
 }

 private handleError(error: any): Promise<any> {
   console.error('An error occurred', error);
   return Promise.reject(error.message || error);
 }
}
