import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.page.html',
  styleUrls: ['./tracker.page.scss'],
})
export class TrackerPage {
  readonly moodIcons = [
    { src: 'assets/icon/moods/mood-cool.svg', alt: 'Cool' },
    { src: 'assets/icon/moods/mood-delighted.svg', alt: 'Delighted' },
    { src: 'assets/icon/moods/mood-discomfort.svg', alt: 'Discomfort' },
    { src: 'assets/icon/moods/mood-happy.svg', alt: 'Happy' },
    { src: 'assets/icon/moods/mood-lovestruck.svg', alt: 'Lovestruck' },
    { src: 'assets/icon/moods/mood-mischievous.svg', alt: 'Mischievous' },
    { src: 'assets/icon/moods/mood-playful.svg', alt: 'Playful' },
    { src: 'assets/icon/moods/mood-relieved.svg', alt: 'Relieved' },
    { src: 'assets/icon/moods/mood-sad.svg', alt: 'Sad' },
    { src: 'assets/icon/moods/mood-scared.svg', alt: 'Scared' },
    { src: 'assets/icon/moods/mood-stressed.svg', alt: 'Stressed' },
    { src: 'assets/icon/moods/mood-surprised.svg', alt: 'Surprised' },
    { src: 'assets/icon/moods/mood-tired.svg', alt: 'Tired' },
    { src: 'assets/icon/moods/mood-upset.svg', alt: 'Upset' }
  ];

  selectedMoodIndex = -1;
}
