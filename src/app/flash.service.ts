import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IFlash } from './flash.model';

@Injectable({
  providedIn: 'root'
})
export class FlashService {

  editing = false;
  editingId: number;

  getRandomNumber() {
    return Math.floor(Math.random() * 1000);
  }

  flashs: IFlash[] = [{
      question: 'What are the different ways of adding external stylesheets/scripts to our project?',
      answer: 'Answer 1',
      show: false,
      id: this.getRandomNumber(),
    },
    {
      question: 'What are inputs and outputs in a component?',
      answer: 'Answer 2',
      show: false,
      id: this.getRandomNumber(),
    },
    {
      question: 'What is the Banana in a box syntax?',
      answer: 'Answer 3',
      show: false,
      id: this.getRandomNumber(),
    },
    {
      question: 'How can we display array/map/set data in our Angular templates?',
      answer: 'Answer 2',
      show: false,
      id: this.getRandomNumber(),
    },
    {
      question: 'What are inputs and outputs in a component?',
      answer: 'Answer 2',
      show: false,
      id: this.getRandomNumber(),
    },
    {
      question: 'How do you use *ngIf else in Angular templates?',
      answer: 'Answer 2',
      show: false,
      id: this.getRandomNumber(),
    },
    {
      question: 'What are observables?',
      answer: 'Answer 2',
      show: false,
      id: this.getRandomNumber(),
    },
    {
      question: 'What is the difference between Subject and BehaviorSubject?',
      answer: 'Answer 2',
      show: false,
      id: this.getRandomNumber(),
    },
    {
      question: 'Where do you unsubscribe observables in Angular components?',
      answer: 'Answer 2',
      show: false,
      id: this.getRandomNumber(),
    },
    {
      question: 'What is the importance of the async pipe?',
      answer: 'Answer 2',
      show: false,
      id: this.getRandomNumber(),
    }
    ];

    flashs$ = new BehaviorSubject<IFlash[]>(this.flashs);

    toggleFlash(id: number) {
      const index = this.flashs.findIndex(flash => flash.id === id);
      this.flashs = [
        ...this.flashs.slice(0, index),
        {
          ...this.flashs[index],
          show: !this.flashs[index].show
        },
        ...this.flashs.slice(index + 1),
      ];
      this.flashs$.next(this.flashs);
    }

    addFlash(flash: IFlash) {
      this.flashs = [
        ...this.flashs,
        {
          ...flash,
          id: this.getRandomNumber(),
          show: false,
        }
      ];
      this.flashs$.next(this.flashs);
    }

    deleteFlash(id: number) {
      const index = this.flashs.findIndex(flash => flash.id === id);
      this.flashs = [
        ...this.flashs.slice(0, index),
        ...this.flashs.slice(index + 1),
      ];
      this.flashs$.next(this.flashs);
    }

    rememberedChange(id: number, flag: 'correct' | 'incorrect') {
      const index = this.flashs.findIndex(flash => flash.id === id);
      this.flashs = [
        ...this.flashs.slice(0, index),
        {
          ...this.flashs[index],
          remembered: flag
        },
        ...this.flashs.slice(index + 1),
      ];
      this.flashs$.next(this.flashs);
    }

    updateFlash(id: number, flash: IFlash) {
      const index = this.flashs.findIndex(flash => flash.id === id);
      this.flashs = [
        ...this.flashs.slice(0, index),
        {
          ...this.flashs[index],
          ...flash,
        },
        ...this.flashs.slice(index + 1)
      ];
      this.flashs$.next(this.flashs);
    }

    getFlash(id: number) {
      const index = this.flashs.findIndex(flash => flash.id === id);
      return this.flashs[index];
    }
}
