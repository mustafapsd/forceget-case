import { FormControl } from '@angular/forms';

export type Mode = 'LCL' | 'FCL' | 'AIR';
export type MovementType =
  | 'DoorToDoor'
  | 'DoorToPort'
  | 'PortToDoor'
  | 'PortToPort';
export type Incoterms = 'DDP' | 'DAT';
export type PackageType = 'Carton' | 'Pallet' | 'Box';
export type PackageUnit = 'CM' | 'IN';
export type WeightUnit = 'KG' | 'LB';
export type Currency = 'USD' | 'CNY' | 'TRY';

export interface Offer {
  mode: Mode;
  movementType: MovementType;
  incoterms: Incoterms;
  city: string;
  packageType: PackageType;
  packageSize: number;
  packageUnit: PackageUnit;
  packageWeight: number;
  weightUnit: WeightUnit;
  currency: Currency;
}

export interface OfferForm {
  mode: FormControl<Mode>;
  movementType: FormControl<MovementType>;
  incoterms: FormControl<Incoterms>;
  city: FormControl<string>;
  packageType: FormControl<PackageType>;
  packageSize: FormControl<number>;
  packageUnit: FormControl<PackageUnit>;
  packageWeight: FormControl<number>;
  weightUnit: FormControl<WeightUnit>;
  currency: FormControl<Currency>;
}
