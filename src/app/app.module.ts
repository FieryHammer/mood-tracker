import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AuthGuard } from '@shared/guards/auth.guard';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { authReducer } from './store/auth/auth.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth/auth.effects';
import { HttpClientModule } from '@angular/common/http';
import { moodsReducer } from './store/moods/mood.reducer';
import { MoodsEffects } from './store/moods/moods.effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    StoreModule.forRoot({ auth: authReducer, moods: moodsReducer, router: routerReducer }),
    EffectsModule.forRoot(AuthEffects, MoodsEffects),
    HttpClientModule,
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
