import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = '/api/btest';

@Injectable({ providedIn: 'root' });

export class BTestCrudResourceService {
  
  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<BTest> {
    
      return this.httpClient.get<BTestResponse>(API_URL).pipe(map(this.transform))
    
  }

  
  private transform(response: BTestResponse): BTest {
    return {
      someProperty: someResponseProperty
    }
  }
  
  create(bTest: BTest): Observable<number> {
    return this.httpClient.post<number>(API_URL, bTest);
  }

}


export interface BTest {
  someProp: string;
}


  interface BTestResponse {
    someResponseProperty
  }

