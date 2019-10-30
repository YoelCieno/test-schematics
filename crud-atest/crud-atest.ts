import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = '/api/atest';

@Injectable({providedIn: 'root'});

export class ATestCrudResourceService {
  
  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<ATest[]> {
    return this.httpClient.get<ATest[]>(API_URL);
  }

  create(aTest: ATest): Observable<number> {
    return this.httpClient.post<number>(API_URL, aTest);
  }

}


export interface ATest {
  someProp: string;
}