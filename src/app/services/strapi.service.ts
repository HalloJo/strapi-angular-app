import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../environments/environment';
import { BehaviorSubject, Observable, Subject, switchMap } from 'rxjs';
import { DataType } from '../types/TypeData';

@Injectable({
  providedIn: 'root',
})
export class StrapiService {
  private http = inject(HttpClient);

  subject = new BehaviorSubject<any>({
    pageSize: 3,
    currentPage: 1,
  });

  strapiData$ = this.subject
    .asObservable()
    .pipe(
      switchMap((params) =>
        this.http.get<DataType>(
          `${environment.strapiUrl}/restaurants?pagination[page]=${params.currentPage}&pagination[pageSize]=${params.pageSize}&populate=*`
        )
      )
    );

  nextPage(): void {
    this.subject.next({
      ...this.subject.value,
      currentPage: this.subject.value.currentPage + 1,
    });
  }

  previousPage(): void {
    this.subject.next({
      ...this.subject.value,
      currentPage: this.subject.value.currentPage - 1,
    });
  }
}
