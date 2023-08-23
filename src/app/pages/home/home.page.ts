import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map, Observable } from 'rxjs';

interface Quote {
  quote: string;
  author: string;
  category: string;
}

type QuotesApiResponse = Array<Quote>

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  quote$: Observable<Quote>;

  constructor(private readonly httpClient: HttpClient) {}

  ngOnInit() {
    this.quote$ = this.httpClient.get<QuotesApiResponse>('https://api.api-ninjas.com/v1/quotes?category=life', { headers: { 'x-api-key': environment.quotesApiKey }}).pipe(map(response => response[0]))
  }
}
