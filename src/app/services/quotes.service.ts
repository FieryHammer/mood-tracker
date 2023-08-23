import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from '@shared/models/quote.model';
import { QuotesApiResponse } from '@shared/types/quotes-api-response.type';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class QuotesService {
  constructor(private readonly httpClient: HttpClient) {}

  fetchQuote(): Observable<Quote> {
    return this.httpClient
      .get<QuotesApiResponse>(`${environment.quotesApiUrl}?category=happiness`, { headers: { 'x-api-key': environment.quotesApiKey }})
      .pipe(
        map(response => response[0]),
        catchError(error => {
          console.error('Failed to fetch quote, returning default...', error);
          return of({
            quote: 'The will of man is his happiness.',
            author: 'Friedrich Schiller',
            category: 'happiness'
          });
        })
      );
  }
}
