import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrackerPageRoutingModule } from './tracker-routing.module';

import { TrackerPage } from './tracker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrackerPageRoutingModule,
    NgOptimizedImage
  ],
  declarations: [TrackerPage]
})
export class TrackerPageModule {}
