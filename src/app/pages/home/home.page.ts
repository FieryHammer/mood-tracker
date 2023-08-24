import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectUsername } from '../../store/auth/auth.selectors';
import { Router } from '@angular/router';

import { format } from 'date-fns';
import { selectMoodDates } from '../../store/moods/moods.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  username$: Observable<string | undefined> = this.store.select(selectUsername);
  moodDates$ = this.store.select(selectMoodDates);

  constructor(private readonly store: Store, private readonly router: Router) {}

  navigateToToday() {
    const formattedDate = format(new Date(), 'yyyy-MM-dd')

    this.router.navigate(['/tracker'], { queryParams: { date: formattedDate } });
  }

  navigateToDate(event: any) {
    const formattedDate = format(new Date(event.detail.value), 'yyy-MM-dd');

    this.router.navigate(['/tracker'], { queryParams: { date: formattedDate } });
  }
}
