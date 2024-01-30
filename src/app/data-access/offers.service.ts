import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Offer } from '../models/offer';

@Injectable({
  providedIn: 'root',
})
export class OffersService {
  offers$ = new BehaviorSubject<Offer[]>(
    JSON.parse(localStorage.getItem('offers') || '[]')
  );

  constructor() {
    this.offers$.subscribe((offers) => {
      localStorage.setItem('offers', JSON.stringify(offers));
    });
  }

  addOffer(offer: Offer): void {
    const offers = this.offers$.getValue();
    offers.push(offer);
    this.offers$.next(offers);
  }
}
