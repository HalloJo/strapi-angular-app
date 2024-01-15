import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../environments/environment';
import { timeout } from 'rxjs';
import { DataType } from '../types/TypeData';

@Injectable({
  providedIn: 'root',
})
export class StrapiService {
  private http = inject(HttpClient);

  strapiData$ = this.http
    .get<DataType>(`${environment.strapiUrl}/restaurants`)
    .pipe(timeout(10000));

  // fetchStrapiData(): Promise<any> {
  //   return fetch(`${environment.strapiUrl}/restaurants`)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .catch((error) => {
  //       console.error('Fetch error:', error);
  //       throw error;
  //     });
  // }
}
