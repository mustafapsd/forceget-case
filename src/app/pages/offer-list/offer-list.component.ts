import { Component, inject } from '@angular/core';
import { OffersService } from '../../data-access/offers.service';
import { Offer } from '../../models/offer';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrl: './offer-list.component.scss',
})
export class OfferListComponent {
  offerService = inject(OffersService);

  offerListColumns: Array<keyof Offer> = [
    'mode',
    'movementType',
    'incoterms',
    'city',
    'packageType',
    'packageSize',
    'packageUnit',
    'packageWeight',
    'weightUnit',
    'currency',
  ];
}
