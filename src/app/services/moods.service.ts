import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Mood } from '@shared/models/mood.model';
import { Observable } from 'rxjs';
import { MoodsAPIResponse } from '@shared/types/moods-api-response-type';

@Injectable({ providedIn: 'root' })
export class MoodsService {
  constructor(private readonly httpClient: HttpClient) {}

  fetchMoods(): Observable<Array<Mood>> {
    return this.httpClient
      .get<MoodsAPIResponse>(`${environment.backendUrl}${environment.moodsPath}`);
  }

  saveMood(mood: Mood): Observable<any> {
    return this.httpClient.post(`${environment.backendUrl}${environment.moodsPath}/${mood.id}`, { mood: mood });
  }
}
