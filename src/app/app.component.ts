import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIsLoggedOut } from './store/auth/auth.selectors';
import { IonMenu } from '@ionic/angular';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';
import { format } from 'date-fns';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonMenu) ionMenu: IonMenu;

  isLoggedOut$: Observable<boolean> = this.store.select(selectIsLoggedOut);

  todayFormatted = format(new Date(), 'yyyy-MM-dd');

  constructor(private readonly store: Store, private readonly router: Router, private readonly authService: AuthService) {}

  logout() {
    this.authService.logout();
    this.ionMenu.close();
  }
}
