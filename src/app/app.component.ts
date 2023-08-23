import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIsLoggedIn } from './store/auth/auth.selectors';
import { IonMenu } from '@ionic/angular';
import { AuthService } from './services/auth.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonMenu) ionMenu: IonMenu;

  isLoggedIn$: Observable<boolean> = this.store.select(selectIsLoggedIn);

  constructor(private readonly store: Store, private readonly authService: AuthService) {}

  logout() {
    this.authService.logout();
    this.ionMenu.close();
  }
}
