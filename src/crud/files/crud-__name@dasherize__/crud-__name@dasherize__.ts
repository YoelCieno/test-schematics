import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = '/api/<%= dasherize(name) %>';

@Injectable({providedIn: 'root'});

export class <%= classify(name) %>CrudResourceService {
  
  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<<%= classify(name) %>[]> {
    return this.httpClient.get<<%= classify(name) %>[]>(API_URL);
  }

  create(<%= camelize(name) %>: <%= classify(name) %>): Observable<number> {
    return this.httpClient.post<number>(API_URL, <%= camelize(name) %>);
  }

}


export interface <%= classify(name) %> {
  someProp: string;
}