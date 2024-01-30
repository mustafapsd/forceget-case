import { Component, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { OffersService } from '../../data-access/offers.service';
import { Offer, OfferForm } from '../../models/offer';
import { initialOfferForm } from '../../utils/constants/initial-offer-form';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.scss',
})
export class OfferComponent {
  offerForm: FormGroup<OfferForm> = initialOfferForm;

  private router = inject(Router);
  private offerService = inject(OffersService);

  submitForm(): void {
    if (this.offerForm.invalid) {
      return;
    }

    this.offerService.addOffer(this.offerForm.value as Offer);

    this.router.navigate(['/']);
  }
}
