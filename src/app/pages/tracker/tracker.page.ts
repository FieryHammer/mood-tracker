import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

export interface Mood {
  src: string;
  name: string;
}


@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.page.html',
  styleUrls: ['./tracker.page.scss'],
})
export class TrackerPage {
  @ViewChild(IonModal) modal: IonModal;

  readonly moods: Array<Mood> = [
    { src: 'assets/icon/moods/mood-cool.svg', name: 'Cool' },
    { src: 'assets/icon/moods/mood-delighted.svg', name: 'Delighted' },
    { src: 'assets/icon/moods/mood-discomfort.svg', name: 'Discomfort' },
    { src: 'assets/icon/moods/mood-happy.svg', name: 'Happy' },
    { src: 'assets/icon/moods/mood-lovestruck.svg', name: 'Lovestruck' },
    { src: 'assets/icon/moods/mood-mischievous.svg', name: 'Mischievous' },
    { src: 'assets/icon/moods/mood-playful.svg', name: 'Playful' },
    { src: 'assets/icon/moods/mood-relieved.svg', name: 'Relieved' },
    { src: 'assets/icon/moods/mood-sad.svg', name: 'Sad' },
    { src: 'assets/icon/moods/mood-scared.svg', name: 'Scared' },
    { src: 'assets/icon/moods/mood-stressed.svg', name: 'Stressed' },
    { src: 'assets/icon/moods/mood-surprised.svg', name: 'Surprised' },
    { src: 'assets/icon/moods/mood-tired.svg', name: 'Tired' },
    { src: 'assets/icon/moods/mood-upset.svg', name: 'Upset' }
  ];

  selectedMoodIndex: number = -1;
  selectedMood: Mood | undefined = undefined;

  selectMood() {
    this.selectedMood = this.moods[this.selectedMoodIndex];
    this.closeModal();
  }

  openModal() {
    this.modal.present();
  }

  closeModal() {
    this.selectedMoodIndex = -1;
    this.modal.dismiss();
  }
}
