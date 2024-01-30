import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OfferForm } from '../../models/offer';

export const initialOfferForm: FormGroup<OfferForm> = new FormGroup({
  mode: new FormControl('LCL'),
  movementType: new FormControl('DoorToDoor'),
  incoterms: new FormControl('DDP'),
  city: new FormControl('NewYork'),
  packageType: new FormControl('Carton'),
  // Should be a number greater than 0
  packageSize: new FormControl(0, [Validators.min(0)]),
  packageUnit: new FormControl('CM'),
  packageWeight: new FormControl(0, [Validators.min(0)]),
  weightUnit: new FormControl('KG'),
  currency: new FormControl('USD'),
}) as FormGroup<OfferForm>;
