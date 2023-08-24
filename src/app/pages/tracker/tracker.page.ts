import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { selectQueryParam } from '../../store/router/router.selectors';
import { filter, map, Observable, take, tap } from 'rxjs';
import { format, isToday, parse } from 'date-fns';
import { selectMood } from '../../store/moods/moods.selectors';
import { MoodIcon } from '@shared/models/mood-icon.model';
import { addMood, updateMood } from '../../store/moods/moods.actions';
import { Mood } from '@shared/models/mood.model';
import { Router } from '@angular/router';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.page.html',
  styleUrls: ['./tracker.page.scss'],
})
export class TrackerPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;

  moodIcons: ReadonlyArray<MoodIcon> = [
    { src: 'assets/icon/moods/mood-cool.svg',         name: 'Cool' },
    { src: 'assets/icon/moods/mood-delighted.svg',    name: 'Delighted' },
    { src: 'assets/icon/moods/mood-discomfort.svg',   name: 'Discomfort' },
    { src: 'assets/icon/moods/mood-happy.svg',        name: 'Happy' },
    { src: 'assets/icon/moods/mood-lovestruck.svg',   name: 'Lovestruck' },
    { src: 'assets/icon/moods/mood-mischievous.svg',  name: 'Mischievous' },
    { src: 'assets/icon/moods/mood-playful.svg',      name: 'Playful' },
    { src: 'assets/icon/moods/mood-relieved.svg',     name: 'Relieved' },
    { src: 'assets/icon/moods/mood-sad.svg',          name: 'Sad' },
    { src: 'assets/icon/moods/mood-scared.svg',       name: 'Scared' },
    { src: 'assets/icon/moods/mood-stressed.svg',     name: 'Stressed' },
    { src: 'assets/icon/moods/mood-surprised.svg',    name: 'Surprised' },
    { src: 'assets/icon/moods/mood-tired.svg',        name: 'Tired' },
    { src: 'assets/icon/moods/mood-upset.svg',        name: 'Upset' }
  ];

  dateParam$ = this.store.select(selectQueryParam('date')).pipe(filter(Boolean))

  title$: Observable<string> = this.dateParam$.pipe(
    map(date => {
      const parsedDate = parse(date, 'yyyy-MM-dd', new Date());
      const displayFormatDate = format(parsedDate, 'yyyy/MM/dd')

      return isToday(parsedDate) ? "Today's Mood" :`Mood for ${displayFormatDate}`;
    })
  );

  selectedMoodIndex: number = -1;
  selectedMoodIcon: MoodIcon | undefined = undefined;
  note: string = '';

  constructor(private readonly store: Store, private readonly router: Router) {}

  ngOnInit() {
    this.store.select(selectMood)
      .pipe(
        filter(Boolean),
        take(1)
      )
      .subscribe(moodForDate => {
        this.selectedMoodIcon = this.moodIcons.find(moodIcon => moodIcon.name === moodForDate.mood)
        this.note = moodForDate.note
      });
  }

  save() {
    this.dateParam$.pipe(take(1)).subscribe(date => {
      if (!this.selectedMoodIcon) {
        return;
      }

      const mood: Mood = {
        mood: this.selectedMoodIcon.name,
        id: date,
        note: this.note}

      this.store.select(selectMood).pipe(take(1), map(Boolean)).subscribe(moodExists => {
        if (moodExists) {
          const update: Update<Mood> = { id: mood.id, changes: mood };
          this.store.dispatch(updateMood({ update: update }));
        } else {
          this.store.dispatch(addMood({ mood: mood }))
        }
      })

    })
  }

  openModal() {
    return this.modal.present();
  }

  selectMoodIcon() {
    this.selectedMoodIcon = this.moodIcons[this.selectedMoodIndex];
    return this.closeModal();
  }

  closeModal() {
    this.selectedMoodIndex = -1;
    return this.modal.dismiss();
  }
}
