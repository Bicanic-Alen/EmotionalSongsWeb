import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CanzoniService {

  constructor(private http: HttpClient) { }

  getSearch(stringa_di_ricerca:string, titoloF:boolean, autoreF:boolean, annoF:boolean){
    const url = `http://localhost:8080/ServerEmotionalsSongs/api/Canzone/searchElement=${stringa_di_ricerca}/searchByAutor=${autoreF}/searchByTitle=${titoloF}/searchByYear=${annoF}`;
    return this.http.get(url);
  }
}
